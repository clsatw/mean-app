import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageCrisesComponent } from 'app/admin/manage-crises.component';
import { ManageHeroesComponent } from 'app/admin/manage-heroes.component';
import { AdminDashboardComponent } from 'app/admin/admin-dashboard.component';
import { AdminComponent } from 'app/admin/admin.component';
import { AuthGuardService } from 'app/shared/auth-load-guard.service';

const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: '',
                children: [
                    { path: 'crises', component: ManageCrisesComponent },
                    { path: 'heroes', component: ManageHeroesComponent },
                    { path: '', component: AdminDashboardComponent }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }
