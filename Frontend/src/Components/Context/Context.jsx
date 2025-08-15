import {createContext, useEffect, useState} from "react";
import axios from 'axios'
import { toast } from "react-toastify";
import { bankend_url } from "../../App.jsx";

export const ShopContext = createContext();

const ShopContextProvider = (props) =>{

    const currency = '$'
    const delivery_fee = 20;
    const [addCart,setAddCart] = useState({});
    const [products,setProducts] = useState([]);
    const [token, setToken] = useState(localStorage.getItem("token")?localStorage.getItem("token"):"");

    const getProducts = async()=>{
        try {
            const response = await axios.get('https://shopwave-97x5.onrender.com/api/products/list');
            if(response.data.success){
                setProducts(response.data.prodcuts);
            }else{
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message);
        }
    }

    const addtoCardProduct = async(itemId,size)=>{
        let cartItem = structuredClone(addCart)

        if(!size){
            toast.error("Please Select the Size!!");
            return;
        }

        if(cartItem[itemId]){
            if(cartItem[itemId][size]){
                cartItem[itemId][size]+=1;
            }else{
                cartItem[itemId][size]=1;
            }
        }else{
            cartItem[itemId]={};
            cartItem[itemId][size]=1;
        }

        setAddCart(cartItem);
        if(token){
            try {
                await axios.post("https://shopwave-97x5.onrender.com/api/cart/add",{itemId,size},{headers:{token}});
                toast.success("Added to Cart");
            } catch (error) {
                console.log(error)
                toast.error(error.message);
            }
        }
    }

    const getCartCount = () =>{
        let cartTotal = 0;

        for(const iteams in addCart){
            for(const iteam in addCart[iteams]){
                try {
                    if(addCart[iteams][iteam]>0){
                        cartTotal+=addCart[iteams][iteam];
                    }
                } catch (error) {
                    toast.error(error.message);
                }
            }
        }
        return cartTotal;
    }


    const updateUserCart = async(itemId,size,quantity)=>{
        let cartData = structuredClone(addCart);
        cartData[itemId][size]= quantity;
        setAddCart(cartData);
        if(token){
            try {
                await axios.post("https://shopwave-97x5.onrender.com/api/cart/update",{itemId,size,quantity},{headers:{token}});
            } catch (error) {
                console.log(error)
                toast.error(error.message);
            }
        }
    }

    const getUserCart = async(token)=>{
        try {

            const responce = await axios.post("https://shopwave-97x5.onrender.com/api/cart/get",{},{headers:{token}});

            if(responce.data.success){
                setAddCart(responce.data.cartData);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }
    const getTotalAmmount = async=>{
        let totalAmmount = 0;

        for(const iteams in addCart){
            let iteamInfo = products.find((product)=>product._id===iteams)
            for(const iteam in addCart[iteams]){
                try {
                    if(addCart[iteams][iteam]>0){
                        totalAmmount+=iteamInfo.price*addCart[iteams][iteam];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmmount;
    }

    
    useEffect(()=>{
        getProducts();
        getUserCart(localStorage.getItem("token"));
    },[])
 
    const value={
        currency,addtoCardProduct,addCart,products,getCartCount,
        getTotalAmmount,delivery_fee,token,setToken,updateUserCart,setAddCart
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;
