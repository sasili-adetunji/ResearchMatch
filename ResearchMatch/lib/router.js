Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});
Router.route("/",  {
    name: "homeIndex",
    data: function () {
        return {
            message: "Welcome to ResearchMatch!!"
        }
    }
})

Router.route("/about",  {
    name: "aboutIndex",
})

Router.route("/contact",  {
    name: "contactIndex",
   
})