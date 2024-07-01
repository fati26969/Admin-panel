import Dashboard from "./pages/dashboard.js"
import Customers from "./pages/customers.js"
import Orders from "./pages/orders.js"
import Products from "./pages/products.js"
import Support from "./pages/support.js"
import Setting from "./pages/setting.js"
import Notdound from "./pages/Notfound.js"


function router(){
   const routes=[
    {path:`/dashboard`,view:Dashboard},
    {path:`/orders`,view:Orders},
    {path:`/products`,view:Products},
    {path:`/customers`,view:Customers},
    {path:`/support`,view:Support},
    {path:`/setting`,view:Setting}
   ]
   const allroutes=routes.map(item=>{
    return{
        route:item,
        isMatch:location.pathname===item.path
    }
   })
   let match=allroutes.find(route=>route.isMatch)

   if(!match){
    match={
        route:{path:`./notfound`,view:Notdound},
        isMatch:true
    }
   }
   document.querySelector(".main-content").innerHTML=match.route.view()
}

window.addEventListener("popstate",router)

function navigateTo(url){
    history.pushState(null,null,url)
    router()
}

document.addEventListener("click",(e)=>{
    if(e.target.hasAttribute("data-link")){
        e.preventDefault()
        navigateTo(e.target.href)
    }
})