const authGuard = (to, from, next) => {
     if(localStorage.getItem('token')){
        next();
     }else{
        next('/login');
     }
}

export default authGuard;