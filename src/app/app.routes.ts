import { Routes } from '@angular/router';
import { FormComponentComponent } from './form-component/form-component.component';
import { ProductsComponent } from './products/products.component';
import { MinesweeperComponent } from './product-items/minesweeper/minesweeper.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { GameRoomComponent } from './game-room/game-room.component';

export const routes: Routes = [
    {path: "login", component: FormComponentComponent, title: "SignIn/ Register"},
    {path: "profile", component: ProfileComponent, title: "Profile"},
    {path: "products", component: ProductsComponent, title: "Products", children: [
        {path: "game/:gameId/:roomId", component: GameRoomComponent, title: "Game Room"},
        {path: "game/:gameId/:roomId/play", component: MinesweeperComponent, title: "Minesweeper"}
    ]},
    {path: "home", component: HomeComponent},
    {path: "", redirectTo: "login", pathMatch: "full"},
    {path: "**", component: PageNotFoundComponent, title: "Not found"}
];
