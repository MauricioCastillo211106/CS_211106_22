export function success (req, res, message, status) {
  let statusCode = status || 200;
  let statusMessage = message || "";
  let error = false;
  res.status(status).send({
    error,
    statusCode,
    statusMessage,
  });
}
export function error(req, res, message, status){
  let statusCode=status || 500;
  let statusMessage = message|| 'internal server errror';

  res.status(statusCode).send({
    error: false,
    status: status,
    body: statusMessage,
  })
};
