module.exports = ({ env }) => ({
  auth: {
    secret: "08e8fef59444c5caa871d7144882852cd20a97d961b1497d8646efa2eeaf8342",
  },
  apiToken: {
    salt: "d44080d7ffe0ebc0be93a34234210b5efeb99bbc98363eb46cbf7f28b7ebaa4e",
  },
  transfer: {
    token: {
      salt: "4fb2f1c2414857a9a70728fdb0a1e35165927c12c841d1277eae6425807f956a",
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
