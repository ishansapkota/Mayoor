import { Routes } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar/navbar.component';
import { AppComponent } from './app.component';
import { ProductsComponent } from './component/Products/products/products.component';
import { ColorchartComponent } from './component/ColorChart/colorchart/colorchart.component';
import { AboutUsComponent } from './component/About Us/about-us/about-us.component';

export const routes: Routes = [
    {
        path:'',
        component: NavbarComponent
    },
    {
        path:'products/:productName',
        component: ProductsComponent
    },
    {
        path:'colorchart',
        component: ColorchartComponent
    },
    {
        path:'about-us',
        component: AboutUsComponent
    }
];
