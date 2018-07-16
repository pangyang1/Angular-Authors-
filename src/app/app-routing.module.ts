import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieNewComponent } from './movie-new/movie-new.component';

const routes: Routes = [
    {path: '', component: MovieListComponent},
    {path: 'new', component: MovieNewComponent},
    {path: 'edit/:id', component: MovieEditComponent},
    {path: 'movies', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
