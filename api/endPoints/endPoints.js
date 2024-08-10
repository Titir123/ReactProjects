export const endPoints = {
    auth:{
        signIn: "/user/signin",
        signUp: "/user/signup"
    },
    cms:{
        list:"/product/list",
        profile:"/user/profile-details",
        create:"/product/create",
        remove:"/product/remove",
        update:"/product/update",
        details:"/product/detail"
    }
};

export const endPointsPath =[
    endPoints.auth.signIn, endPoints.auth.signUp, 
    endPoints.cms.list, endPoints.cms.profile, 
    endPoints.cms.create, endPoints.cms.remove,
    endPoints.cms.update, endPoints.cms.details
]