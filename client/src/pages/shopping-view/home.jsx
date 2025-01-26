import { Button } from '@/components/ui/button';
import bannerOne from '../../assets/banner-1.webp'
import bannerTwo from '../../assets/banner-2.webp'
import bannerThree from '../../assets/banner-3.webp'
import { ChevronsLeftIcon,
        ChevronsRightIcon, 
        ShirtIcon,
        CloudLightning, 
        BabyIcon, 
        WatchIcon, 
        Umbrella, 
        Shirt, 
        WashingMachine, 
        ShoppingBasket, 
        Airplay, 
        Image, 
        Heater } from 'lucide-react';
import { Card,CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllFilteredProducts } from '@/store/shop/product-slice';
import ShoppingProductTile from '@/components/shopping-view/product-tile';
import { useNavigate } from 'react-router-dom';
function ShoppingHome() {

    const categoriesWithIcon = [
        {id:"men",label:"Men",icon:ShirtIcon},
        {id:"women",label:"Women",icon:CloudLightning},
        {id:"kids",label:"Kids",icon:BabyIcon},
        {id:"accessories",label:"Accessories",icon:WatchIcon},
        {id:"footwear",label:"Footwear",icon:Umbrella},
    ];

    const brandWithIcon=[
        {id:'nike',label:'Nike',icon:Shirt},
        {id:'adidas',label:'Adidas',icon:WashingMachine},
        {id:'puma',label:'Puma',icon:ShoppingBasket},
        {id:'levi',label:"Levi's",icon:Airplay},
        {id:'zara',label:'Zara',icon:Image},
        {id:'h&m',label:'H&M',icon:Heater},
    ]

    const [currentSlide,setCurrentSlide] = useState(0)
    const {productList} = useSelector(state=>state.shopProducts)
    const slides = [bannerOne,bannerTwo,bannerThree]
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleNavigateToListingPage(getCurrentItem,section){
        sessionStorage.removeItem('filters');
        const currentFilter = {
            [section]:[getCurrentItem.id]
        }
        sessionStorage.setItem('filters',JSON.stringify(currentFilter))
        navigate(`/shop/listing`);
    }

     function handleGetProductDetails(getCurrentProductId) {
        dispatch(fetchProductDetails(getCurrentProductId));
      }

    useEffect(()=>{
        const timer = setInterval(()=>{
            setCurrentSlide(prevSlide => (prevSlide + 1 )% slides.length)
        },2000)
        return () => clearInterval(timer);
    },[]);

    useEffect(()=>{
        dispatch(fetchAllFilteredProducts({filterParams:{},sortParams:'price-lowtohigh'}))
    },[dispatch])
    console.log(productList,'productList');
    return ( 
        <div className="flex flex-col min-h-screen">
            <div className="relative w-full h-[600px] overflow-hidden">
                {
                    slides.map((slides,index)=><img
                    src={slides}
                    key={index}
                    className={`${index === currentSlide ? 'opacity-100':'opacity-0'}absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
                />)
                }
                <Button
                variant="outline"
                size="icon"
                onClick={() =>
                    setCurrentSlide(
                    (prevSlide) =>
                        (prevSlide - 1 +slides.length) %
                        slides.length
                    )
                }
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
                >
                    <ChevronsLeftIcon className="w-4 h-4"/>
                </Button>
                <Button
                variant="outline"
                size="icon"
                onClick={() =>
                    setCurrentSlide(
                    (prevSlide) => (prevSlide + 1) % slides.length
                    )
                }
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
                >
                    <ChevronsRightIcon className="w-4 h-4"/>
                </Button>
            </div>
            <section className='py-12 bg-gray-50'>
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-center mb-8'>Shop by Category</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                        {
                            categoriesWithIcon.map(categoryItem=>
                            <Card onClick={()=>handleNavigateToListingPage(categoryItem,'category')} className="cursor-pointer hover:shadow-lg transition-shadow">
                                <CardContent className="flex flex-col items-center justify-center p-6">
                                    <categoryItem.icon className="w-12 h-12 mb-4 text-primary"/>
                                    <span className='font-bold'>{categoryItem.label}</span>
                                </CardContent>
                            </Card>)
                        }
                    </div>
                </div>
            </section>

            <section className='py-12 bg-gray-50'>
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-center mb-8'>Shop by Brand</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
                        {
                            brandWithIcon.map(brandItem=>
                            <Card onClick={()=>handleNavigateToListingPage(brandItem,'brand')} className="cursor-pointer hover:shadow-lg transition-shadow">
                                <CardContent className="flex flex-col items-center justify-center p-6">
                                    <brandItem.icon className="w-12 h-12 mb-4 text-primary"/>
                                    <span className='font-bold'>{brandItem.label}</span>
                                </CardContent>
                            </Card>)
                        }
                    </div>
                </div>
            </section>

            <section className='py-12'>
                        <div className='container mx-auto px-4'>
                            <h2 className='text-3xl font-bold text-center mb-8'>
                                Feature Products
                            </h2>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                                {
                                    productList && productList.length > 0 ? 
                                    productList.map(productItem => <ShoppingProductTile
                                        handleGetProductDetails={handleGetProductDetails}
                                        product={productItem}/>)
                                    :null
                                }
                            </div>
                        </div>
            </section>
        </div>
     );
}

export default ShoppingHome;