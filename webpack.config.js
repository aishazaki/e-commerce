var path = require("path")
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin")
var OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
/*zero configuration 'default' */
module.exports = {
    /*module.exports بمجرد تشغيل  ويب باك من خلال الامر npm run build 
    webpack.cliقم بتصدير الاعدادات في الملف ليتم  تنفيذها وقراءاتها من قبل */

    entry: {
        app: "./src/index.js"
    },

    output: {
        path: path.join(__dirname, "/dist"),
        publicPath: "",
        filename: "main.js",
    },
    mode: "development",

    devServer: {
        contentBase: path.join(__dirname, "/dist"),/*المسار الذي سوف تتعامل معه */
        port: 1239,
        writeToDisk: true,/*ليتم نسخ مجلد dist
         لهنا بدلا من وجودة بالذكراة كماهو محدد افتراضيا */
        open: true, /*فتح الصفحة اوتماتيكيا دون نسخ الرابط  للمتصفح */
    },
    module: {
        /*لكل محمل قاعدة نكتبها داخل الخاصية rules
        ليصبح عددها بعدد المحملات التي قمنا بتنزيلها 
        تكتب قواعد المحملات داخل [] */
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                       /*  options: {
                            minimize: true,تفعيل ضغط الملف 
                        } */
                    }
                ]

            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader',

                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use:[
                    {
                        loader: "file-loader",
                        options:{
                            name: '[name].[ext]',
                            outputPath: "images",
                        }
                    }
                ]
            },
            {
                test:  /\.(svg|eot|woff|ttf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: "fonts",
                            esModule: false,
                        }
                    }
                ]
            },
            {
                test: require.resolve('jquery'),/*استدعاءلمسار المجلد جيكوري من داخل المجلد node_modules */
                loader: 'expose-loader',
                options:{
                    exposes:['$', 'jQuery'],
                }
            }
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html", /*اسم الملف الذي ستنتجه ويب باك  من عمليةالبناء */
            template: "./src/index.html",/*مسارالملف الاصلي  */
        }),
        new HtmlWebpackPlugin({
            filename: "product.html", /*اسم الملف الذي ستنتجه ويب باك  من عمليةالبناء */
            template: "./src/product.html",/*مسارالملف الاصلي  */
        }),
        new HtmlWebpackPlugin({
            filename: "checkout.html", /*اسم الملف الذي ستنتجه ويب باك  من عمليةالبناء */
            template: "./src/checkout.html",/*مسارالملف الاصلي  */
        }),
        new HtmlWebpackPlugin({
            filename: "payment.html", /*اسم الملف الذي ستنتجه ويب باك  من عمليةالبناء */
            template: "./src/payment.html",/*مسارالملف الاصلي  */
        }),
        new MiniCssExtractPlugin({ filename: "css/style.css" }),

        new OptimizeCssAssetsPlugin({}),
    ],

};