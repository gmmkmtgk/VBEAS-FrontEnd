import Footer from '../../Partials/Footer/Footer';
import Header from '../../Partials/Header/Header.jsx';

const RenderComponent = (Component, user, adminRoute, layout, props) =>{
    if(adminRoute || layout) return <Component user = {user} {...props} /> 
    else return <> <Header />  <Component user = {user} {...props} /> <Footer /> </>
} 

export default RenderComponent;