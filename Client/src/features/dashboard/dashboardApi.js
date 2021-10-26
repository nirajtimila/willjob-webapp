export const getJobs = (params) => {
  return fetch("http://localhost:3000/allJobs", {
    method: "get",
  });
};
