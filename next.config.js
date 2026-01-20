
module.exports = {
    modules: true,
    images: {
        //domains: ['localhost'],
        
        loader: "default",
        domains: ["res.cloudinary.com","speedtrack.co.in","gitlab.com","wpadmin.vpvelsao-pale-issorcim.in"],

    },
    env:{
        // API_PATH:"http://localhost:1339",
        API_PATH:"https://wpadmin.vpvelsao-pale-issorcim.in/wp-json/wp/v2/",
        TEMP_GQL_API_PATH:'https://wpadmin.vpvelsao-pale-issorcim.in/graphql',//leter we remove it
        SQL_API_PATH:"https://wpadmin.vpvelsao-pale-issorcim.in",
        WP_API_PATH:"https://wpadmin.vpvelsao-pale-issorcim.in/wp-json/wp/v2/",
        GQL_API_PATH:'https://wpadmin.vpvelsao-pale-issorcim.in/graphql',
        JWT_TOKEN:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTY1NzU1ODkxNCwiZXhwIjoxODE1MjM4OTE0fQ.kg71BT59KvKXpk6w0i-rBdx_At1NQWthSgmyXieYjiA',

        RAZORPAY_KEY:'rzp_test_d0Kjx4nv1IDXeY',
        RAZORPAY_SECRET:'v76gJx1aBOYOzX83jCcChiF1'
    },
    // Uncomment the line below to enable basePath, pages and
    // redirects will then have a path prefix (`/app` in this case)
    //
    // basePath: '/app',

    async redirects() {
        return [
            {
                source: '/logout',
                destination: '/',
                permanent: true,
            },
            // Path Matching - will match `/old-blog/a`, but not `/old-blog/a/b`
            /*{
                source: '/old-blog/:slug',
                destination: '/news/:slug',
                permanent: false,
            },
            // Wildcard Path Matching - will match `/blog/a` and `/blog/a/b`
            {
                source: '/blog/:slug*',
                destination: '/news/:slug*',
                permanent: false,
            },
            // Regex Path Matching - The regex below will match `/post/123` but not `/post/abc`
            {
                source: '/post/:slug(\\d{1,})',
                destination: '/news/:slug',
                permanent: false,
            },*/
        ]
    },
}