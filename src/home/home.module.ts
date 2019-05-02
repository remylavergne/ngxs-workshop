import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';

import { homeComponents } from './components';
import { homeContainers } from './containers';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { homeStates } from './states';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NgxsModule.forFeature(
            [...homeStates]
        )
    ],
    declarations: [
        HomeComponent,
        ...homeContainers,
        ...homeComponents
    ]
})
export class HomeModule { }
