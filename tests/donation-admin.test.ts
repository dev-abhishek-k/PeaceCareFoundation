import { describe, expect, it } from "bun:test";
import { updateRecordStatus, type StatusTable } from "../src/lib/admin-workflows";
import { pledgeSchema, recordPledge } from "../src/lib/donation-workflows";

const validPledge = {
  donor_name: "  Sam Donor ",
  email: "sam@example.com",
  phone: "",
  amount: "1500",
  cause: "dogs",
  frequency: "monthly",
  message: "  For medical care ",
};

describe("pledge submission", () => {
  it("validates, normalizes, and records a pledge", async () => {
    const parsed = pledgeSchema.safeParse(validPledge);
    expect(parsed.success).toBe(true);
    if (!parsed.success) return;

    let inserted: Record<string, unknown> | undefined;
    const client = {
      from: (table: "donations") => {
        expect(table).toBe("donations");
        return {
          insert: async (values: Record<string, unknown>) => {
            inserted = values;
            return { error: null };
          },
        };
      },
    };

    await expect(recordPledge(client, parsed.data, "user-123")).resolves.toBe(true);
    expect(inserted).toEqual({
      user_id: "user-123",
      donor_name: "Sam Donor",
      email: "sam@example.com",
      phone: null,
      amount: 1500,
      cause: "dogs",
      frequency: "monthly",
      message: "For medical care",
    });
  });

  it("rejects invalid pledge details without attempting an insert", () => {
    const parsed = pledgeSchema.safeParse({ ...validPledge, email: "not-an-email" });
    expect(parsed.success).toBe(false);
  });

  it("reports a failed pledge when the backend rejects the insert", async () => {
    const parsed = pledgeSchema.safeParse(validPledge);
    expect(parsed.success).toBe(true);
    if (!parsed.success) return;

    let attemptedInsert = false;
    const client = {
      from: (_table: "donations") => ({
        insert: async (_values: Record<string, unknown>) => {
          attemptedInsert = true;
          return { error: new Error("insert denied") };
        },
      }),
    };

    await expect(recordPledge(client, parsed.data, null)).resolves.toBe(false);
    expect(attemptedInsert).toBe(true);
  });

  it("reports a failed pledge when the backend request throws", async () => {
    const pledge = pledgeSchema.parse(validPledge);
    const client = {
      from: (_table: "donations") => ({
        insert: async (_values: Record<string, unknown>) => {
          throw new Error("network unavailable");
        },
      }),
    };

    await expect(recordPledge(client, pledge, null)).resolves.toBe(false);
  });
});

describe("admin status updates", () => {
  it("updates the selected record and reports success", async () => {
    let operation: { table: StatusTable; id: string; status: string } | undefined;
    const update = async (table: StatusTable, id: string, status: string) => {
      operation = { table, id, status };
      return { error: null };
    };

    await expect(updateRecordStatus(update, "donations", "donation-42", "confirmed")).resolves.toBe(
      true,
    );
    expect(operation).toEqual({
      table: "donations",
      id: "donation-42",
      status: "confirmed",
    });
  });

  it("reports a failed status update when the backend rejects it", async () => {
    const update = async (table: StatusTable) => ({
      error: new Error(`update denied for ${table}`),
    });

    await expect(
      updateRecordStatus(update, "investor_enquiries", "enquiry-7", "contacted"),
    ).resolves.toBe(false);
  });

  it("reports a failed status update when the backend request throws", async () => {
    const update = async () => {
      throw new Error("network unavailable");
    };

    await expect(updateRecordStatus(update, "donations", "donation-42", "received")).resolves.toBe(
      false,
    );
  });
});
