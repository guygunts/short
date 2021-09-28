
let url = `http://localhost:4201`
const PROXY_CONFIG = [
    {
        context: "/list",
        target: `${url}/shortlist`,
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
        pathRewrite: {
            "^/list": ""
        }
    },
    {
        context: "/add",
        target: `${url}/shortadd`,
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
        pathRewrite: {
            "^/add": ""
        }
    }
]
module.exports = PROXY_CONFIG;
