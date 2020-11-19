(this["webpackJsonpshopify-react"]=this["webpackJsonpshopify-react"]||[]).push([[0],{50:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),i=n.n(r),o=n(15),s=n.n(o),a=(n(50),n(10)),x=n(41),d=n(19),u=n(5),j=n(30),h=n(16),l=n.n(h),b=n(24),p=n(36),f=n(37),O=n(43),g=n(42),m=n(38),C=n.n(m),v=i.a.createContext(),k=C.a.buildClient({domain:"graphql.myshopify.com",storefrontAccessToken:"dd4d4dc146542ba7763305d71d1b3d38"}),y=function(e){Object(O.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(p.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={products:[],product:{},checkout:{},isCartOpen:!1,test:"test"},e.createCheckout=Object(b.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.checkout.create();case 2:n=t.sent,e.setState({checkout:n});case 4:case"end":return t.stop()}}),t)}))),e.addItemToCheckout=function(){var t=Object(b.a)(l.a.mark((function t(n,c){var r,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[{variantId:n,quantity:parseInt(c,10)}],t.next=3,k.checkout.addLineItems(e.state.checkout.id,r);case 3:i=t.sent,e.setState({checkout:i});case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.fetchAllProducts=Object(b.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.product.fetchAll();case 2:n=t.sent,e.setState({products:n});case 4:case"end":return t.stop()}}),t)}))),e.fetchProductWithId=function(){var t=Object(b.a)(l.a.mark((function t(n){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.product.fetch(n);case 2:c=t.sent,e.setState({product:c});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.closeCart=function(){e.setState({isCartOpen:!1})},e.openCart=function(){e.setState({isCartOpen:!0})},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.createCheckout()}},{key:"render",value:function(){return Object(c.jsx)(v.Provider,{value:Object(j.a)(Object(j.a)({},this.state),{},{fetchAllProducts:this.fetchAllProducts,fetchProductWithId:this.fetchProductWithId,closeCart:this.closeCart,openCart:this.openCart,addItemToCheckout:this.addItemToCheckout}),children:this.props.children})}}]),n}(r.Component),w=(v.Consumer,y),I=n(2),S=function(){return Object(c.jsx)(I.Div,{bg:"transparent",d:"flex",align:"center",justify:"center",pos:"absolute",top:"0",bottom:"0",right:"0",left:"0",style:{zIndex:-1},children:Object(c.jsx)(I.Icon,{name:"Loading3",size:"4rem",color:"brand500"})})},z=function(){var e=Object(r.useContext)(v),t=e.fetchAllProducts,n=e.products;return Object(r.useEffect)((function(){return t(),function(){}}),[t]),n?Object(c.jsx)(I.Container,{children:Object(c.jsx)(I.Row,{children:n.map((function(e){return Object(c.jsx)(I.Col,{children:Object(c.jsx)(d.b,{to:"/product/".concat(e.id),style:{textDecoration:"none"},children:Object(c.jsxs)(I.Div,{p:{xs:"2px",lg:"6px"},m:{xs:"3px",lg:"5px"},maxH:"380px",maxW:"215px",children:[Object(c.jsx)(I.Div,{h:{xs:"130px",lg:"300px"},w:{xs:"110px",lg:"200px"},bgImg:e.images[0].src,bgSize:"cover",bgPos:"center center",shadow:"3",hoverShadow:"4",transition:"0.3s",m:{b:"8px"}}),Object(c.jsx)(I.Text,{tag:"h1",textWeight:"300",textSize:"subheader",textDecor:"none",textColor:"black500",children:e.title}),Object(c.jsxs)(I.Text,{tag:"h2",textWeight:"300",textSize:"body",textDecor:"none",textColor:"gray600",children:["$",e.variants[0].price]})]})})},e.id)}))})}):Object(c.jsx)(S,{})},T=function(){var e=Object(u.f)().id,t=Object(r.useContext)(v),n=t.fetchProductWithId,i=t.addItemToCheckout,o=t.product;return Object(r.useEffect)((function(){return n(e),function(){}}),[n,e]),o.title?Object(c.jsx)(I.Container,{children:Object(c.jsxs)(I.Row,{align:{xs:"flex",lg:"center"},children:[Object(c.jsx)(I.Col,{children:Object(c.jsx)(I.Div,{bgImg:o.images[0].src,bgSize:"contain",bgRepeat:"no-repeat",bgPos:"center center",w:{xs:"300px",lg:"400px"},h:{xs:"300px",lg:"500px"},m:{xs:"8px",lg:"10px"}})}),Object(c.jsxs)(I.Col,{children:[Object(c.jsx)(I.Text,{textSize:"heading",children:o.title}),Object(c.jsxs)(I.Text,{textSize:"subheader",children:["$",o.variants[0].price]}),Object(c.jsx)(I.Text,{tag:"p",textSize:"paragraph",textColor:"gray900",textWeight:"400",children:o.description}),Object(c.jsx)(I.Button,{m:"6px",onClick:function(){i(o.variants[0].id,1)},children:"Add To Cart"})]})]})}):Object(c.jsx)(S,{})},P=function(){var e=Object(r.useContext)(v).openCart;return Object(c.jsxs)(I.Container,{d:"flex",flexDir:"row",p:"2rem",justify:"space-between",bg:"gray300",shadow:"2",rounded:"sm",children:[Object(c.jsx)(d.b,{to:"/",children:Object(c.jsx)(I.Icon,{name:"Store",size:"30px"})}),Object(c.jsx)(I.Anchor,{onClick:function(){return e()},children:Object(c.jsx)(I.Icon,{name:"Bag",size:"30px"})})]})},D=function(){var e=Object(r.useContext)(v),t=e.isCartOpen,n=e.closeCart,i=e.checkout;return Object(c.jsx)(I.SideDrawer,{isOpen:t,onClose:n,children:Object(c.jsxs)(I.Div,{d:"flex",flexDir:"column",m:{b:"4rem"},children:[Object(c.jsx)(I.Icon,{name:"Back",size:"30px",onClick:n,cursor:"pointer",m:{b:"20px"}}),i.lineItems&&i.lineItems.map((function(e){return Object(c.jsxs)(I.Row,{p:"5px",w:"100%",children:[Object(c.jsx)(I.Col,{children:Object(c.jsx)(I.Div,{bgImg:e.variant.image.src,bgSize:"contain",bgRepeat:"no-repeat",bgPos:"center center",h:"90px",w:"90px"})}),Object(c.jsxs)(I.Col,{h:"130px",children:[Object(c.jsx)(I.Text,{textSize:{xs:"caption",md:"body"},children:e.title}),Object(c.jsx)(I.Text,{textSize:{xs:"caption",md:"body"},textWeight:"500",children:e.variant.title}),Object(c.jsxs)(I.Text,{textSize:{xs:"caption",md:"body"},textWeight:"800",children:["quantity: ",e.quantity]})]}),Object(c.jsx)(I.Col,{children:Object(c.jsxs)(I.Text,{textSize:{xs:"caption",md:"body"},textWeight:"600",children:["$",e.variant.price*e.quantity]})})]},e.id)})),Object(c.jsx)(I.Anchor,{href:i.webUrl,target:"_blank",children:Object(c.jsx)(I.Button,{bg:"info700",hoverBg:"info600",color:"white",m:{t:"15px"},textSize:{xs:"caption",md:"body"},suffix:Object(c.jsx)(I.Icon,{name:"MasterCard",size:"20px",m:{l:"4px"}}),cursor:"pointer",rounded:"md",children:"Checkout"})})]})})},A=new x.a;var W=function(){return Object(c.jsx)(w,{children:Object(c.jsx)(a.Provider,{value:A,debug:undefined,debugAfterHydration:!0,children:Object(c.jsxs)(d.a,{children:[Object(c.jsx)(P,{}),Object(c.jsx)(D,{}),Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{path:"/product/:id",children:Object(c.jsx)(T,{})}),Object(c.jsx)(u.a,{path:"/",children:Object(c.jsx)(z,{})})]})]})})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,89)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),i(e),o(e)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(W,{})}),document.getElementById("root")),B()}},[[88,1,2]]]);
//# sourceMappingURL=main.2829f5f5.chunk.js.map