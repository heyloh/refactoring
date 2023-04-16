const statement = require("./statement");

test("should create statement from invoice with tragedy performance", () => {
  const invoice = {
    customer: "BigCo",
    performances: [
      {
        playID: "hamlet",
        audience: 55,
      },
    ],
  };
  const plays = { hamlet: { name: "Hamlet", type: "tragedy" } };

  const result = statement(invoice, plays);

  expect(result).toBe(
    `Statement for BigCo\n Hamlet: $650.00 (55 seats)\nAmount owed is $650.00\nYou earned 25 credits\n`
  );
});

test("should create statement from invoice with tragedy performance and low audience", () => {
  const invoice = {
    customer: "BigCo",
    performances: [
      {
        playID: "hamlet",
        audience: 30,
      },
    ],
  };
  const plays = { hamlet: { name: "Hamlet", type: "tragedy" } };

  const result = statement(invoice, plays);

  expect(result).toBe(
    `Statement for BigCo\n Hamlet: $400.00 (30 seats)\nAmount owed is $400.00\nYou earned 0 credits\n`
  );
});

test("should create statement from invoice with comedy performance", () => {
  const invoice = {
    customer: "BigCo",
    performances: [
      {
        playID: "as-like",
        audience: 35,
      },
    ],
  };
  const plays = { "as-like": { name: "As You Like It", type: "comedy" } };

  const result = statement(invoice, plays);

  expect(result).toBe(
    `Statement for BigCo\n As You Like It: $580.00 (35 seats)\nAmount owed is $580.00\nYou earned 12 credits\n`
  );
});


test("should create statement from invoice with comedy performance and low audience", () => {
  const invoice = {
    customer: "BigCo",
    performances: [
      {
        playID: "as-like",
        audience: 20,
      },
    ],
  };
  const plays = { "as-like": { name: "As You Like It", type: "comedy" } };

  const result = statement(invoice, plays);

  expect(result).toBe(
    `Statement for BigCo\n As You Like It: $360.00 (20 seats)\nAmount owed is $360.00\nYou earned 4 credits\n`
  );
});

test("should not create statement from invoice with performance that has unknown type", () => {
  const invoice = {
    customer: "BigCo",
    performances: [
      {
        playID: "as-like",
        audience: 35,
      },
    ],
  };
  const plays = { "as-like": { name: "As You Like It", type: "drama" } };

  expect(() => statement(invoice, plays)).toThrowError("unknown type: drama");
});
