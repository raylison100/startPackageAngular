import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './componets/layout.component';


export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('../post/post.module').then((m) => m.PostModule),
            },
            {
                path: 'album',
                loadChildren: () => import('../album/album.module').then((m) => m.AlbumModule),
            },
            {
                path: 'auth',
                loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule),
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
