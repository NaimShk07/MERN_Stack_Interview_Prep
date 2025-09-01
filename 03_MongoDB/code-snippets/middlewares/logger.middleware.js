import fs from "fs";

const logReqRes = (fileName) => {
	return (req, res, next) => {
		fs.appendFile(
			fileName,
			`\n${Date.now()}: ${req.method}: ${req.path}`,
			(err, data) => {
				next();
			}
		);
	};
};

export default logReqRes;
