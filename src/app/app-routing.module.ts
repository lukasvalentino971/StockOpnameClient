import { FormTransactionPackagingComponent } from './pages/packaging/form-transaction-packaging/form-transaction-packaging.component';
import { FormTransactionToolsComponent } from './pages/tools/form-transaction-tools/form-transaction-tools.component';
import { FormTransactionMaterialComponent } from './pages/material/form-transaction-material/form-transaction-material.component';
import { FormTransactionFgComponent } from './pages/fg/form-transaction-fg/form-transaction-fg.component';
import { MasterStorageComponent } from './pages/documentation/storage/master-storage/master-storage.component';
import { UpdateStorageComponent } from './pages/storages/update-storage/update-storage.component';
import { CreateStorageComponent } from './pages/storages/create-storage/create-storage.component';
import { IndexStorageComponent } from './pages/storages/index-storage/index-storage.component';
import { IndexPackagingDocumentationComponent } from './pages/documentation/packaging/index-packaging-documentation/index-packaging-documentation.component';
import { DocumentationMaterialIndexComponent } from './pages/documentation/material/documentation-material-index/documentation-material-index.component';
import { MasterSectionComponent } from './pages/documentation/section/master-section/master-section.component';
import { TrToolsComponent } from './pages/documentation/tools/tr-tools/tr-tools.component';
import { MasterToolsComponent } from './pages/documentation/tools/master-tools/master-tools.component';

import { TrPackagingComponent } from './pages/documentation/packaging/tr-packaging/tr-packaging.component';
import { MasterPackagingComponent } from './pages/documentation/packaging/master-packaging/master-packaging.component';

import { TrMaterialComponent } from './pages/documentation/material/tr-material/tr-material.component';
import { MasterMaterialComponent } from './pages/documentation/material/master-material/master-material.component';

import { TrFgComponent } from './pages/documentation/fg/tr-fg/tr-fg.component';
import { MasterFgComponent } from './pages/documentation/fg/master-fg/master-fg.component';

import { IndexDocumentationComponent } from './pages/documentation/index-documentation/index-documentation.component';
import { TemplateToolsComponent } from './pages/tools/template-tools/template-tools.component';
import { TemplateMaterialComponent } from './pages/material/template-material/template-material.component';
import { TemplatePackagingComponent } from './pages/packaging/template-packaging/template-packaging.component';
import { TemplateFgComponent } from './pages/fg/template-fg/template-fg.component';
import { UpdateSectionComponent } from './pages/sections/update-section/update-section.component';
import { CreateSectionComponent } from './pages/sections/create-section/create-section.component';
import { IndexSectionComponent } from './pages/sections/index-section/index-section.component';
import { UpdateToolsComponent } from './pages/tools/update-tools/update-tools.component';
import { CreateToolsComponent } from './pages/tools/create-tools/create-tools.component';
import { DetailToolsComponent } from './pages/tools/detail-tools/detail-tools.component';
import { UpdatePackagingComponent } from './pages/packaging/update-packaging/update-packaging.component';
import { CreatePackagingComponent } from './pages/packaging/create-packaging/create-packaging.component';
import { DetailPackagingComponent } from './pages/packaging/detail-packaging/detail-packaging.component';
import { UpdateMaterialComponent } from './pages/material/update-material/update-material.component';
import { DetailMaterialComponent } from './pages/material/detail-material/detail-material.component';
import { UpdateFgComponent } from './pages/fg/update-fg/update-fg.component';
import { CreateFgComponent } from './pages/fg/create-fg/create-fg.component';
import { DetailFgComponent } from './pages/fg/detail-fg/detail-fg.component';
import { IndexPackagingComponent } from './pages/packaging/index-packaging/index-packaging.component';
import { IndexMaterialComponent } from './pages/material/index-material/index-material.component';
import { IndexFgComponent } from './pages/fg/index-fg/index-fg.component';
import { AuthGuard } from './services/middleware/auth.guard';
import { IndexToolsComponent } from './pages/tools/index-tools/index-tools.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { CreateMaterialComponent } from './pages/material/create-material/create-material.component';
import { DocumentationFgIndexComponent } from './pages/documentation/fg/documentation-fg-index/documentation-fg-index.component';
import { DocumentationToolsIndexComponent } from './pages/documentation/tools/documentation-tools-index/documentation-tools-index.component';
import { IndexUserComponent } from './pages/technical-user/index-user/index-user.component';
import { CreateUserComponent } from './pages/technical-user/create-user/create-user.component';
import { EditUserComponent } from './pages/technical-user/edit-user/edit-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'auth', component: AuthComponent, canActivate: [AuthGuard] },
  { path: 'tools', component: IndexToolsComponent, canActivate: [AuthGuard] },
  { path: 'tools/Create', component: CreateToolsComponent, canActivate: [AuthGuard] },
  { path: 'tools/Update/:id', component: UpdateToolsComponent, canActivate: [AuthGuard] },
  { path: 'tools/template/:id', component: TemplateToolsComponent, canActivate: [AuthGuard] },
  { path: 'tools/template/:id', component: TemplateToolsComponent, canActivate: [AuthGuard] },
  { path: 'tools/form/:id', component: FormTransactionToolsComponent, canActivate: [AuthGuard] },
  { path: 'tools/:id', component: DetailToolsComponent, canActivate: [AuthGuard] },
  { path: 'fg', component: IndexFgComponent, canActivate: [AuthGuard] },
  { path: 'fg/Create', component: CreateFgComponent, canActivate: [AuthGuard] },
  { path: 'fg/Update/:id', component: UpdateFgComponent, canActivate: [AuthGuard] },
  { path: 'fg/template/:id', component: TemplateFgComponent, canActivate: [AuthGuard] },
  { path: 'fg/form/:id', component: FormTransactionFgComponent, canActivate: [AuthGuard] },
  { path: 'fg/:id', component: DetailFgComponent, canActivate: [AuthGuard] },
  { path: 'material', component: IndexMaterialComponent, canActivate: [AuthGuard] },
  { path: 'material/Create', component: CreateMaterialComponent, canActivate: [AuthGuard] },
  { path: 'material/Update/:id', component: UpdateMaterialComponent, canActivate: [AuthGuard] },
  { path: 'material/template/:id', component: TemplateMaterialComponent, canActivate: [AuthGuard] },
  { path: 'material/form/:id', component: FormTransactionMaterialComponent, canActivate: [AuthGuard] },
  { path: 'material/:id', component: DetailMaterialComponent, canActivate: [AuthGuard] },
  { path: 'packaging', component: IndexPackagingComponent, canActivate: [AuthGuard] },
  { path: 'packaging/Create', component: CreatePackagingComponent, canActivate: [AuthGuard] },
  { path: 'packaging/Update/:id', component: UpdatePackagingComponent, canActivate: [AuthGuard] },
  { path: 'packaging/template/:id', component: TemplatePackagingComponent, canActivate: [AuthGuard] },
  { path: 'packaging/form/:id', component: FormTransactionPackagingComponent, canActivate: [AuthGuard] },
  { path: 'packaging/:id', component: DetailPackagingComponent, canActivate: [AuthGuard] },
  { path: 'section', component: IndexSectionComponent, canActivate: [AuthGuard] },
  { path: 'section/Create', component: CreateSectionComponent, canActivate: [AuthGuard] },
  { path: 'section/Update/:id', component: UpdateSectionComponent, canActivate: [AuthGuard] },
  { path: 'storage', component: IndexStorageComponent, canActivate: [AuthGuard] },
  { path: 'storage/Create', component: CreateStorageComponent, canActivate: [AuthGuard] },
  { path: 'storage/Update/:id', component: UpdateStorageComponent, canActivate: [AuthGuard] },
  { path: 'technical-user', component: IndexUserComponent, canActivate: [AuthGuard] },
  { path: 'technical-user/Create', component: CreateUserComponent, canActivate: [AuthGuard] },
  { path: 'technical-user/Update/:id', component: EditUserComponent, canActivate: [AuthGuard]},
  { path: 'documentation', component: IndexDocumentationComponent, canActivate: [AuthGuard] },
  { path: 'documentation/fg', component: DocumentationFgIndexComponent, canActivate: [AuthGuard] },
  { path: 'documentation/fg/master', component: MasterFgComponent, canActivate: [AuthGuard] },
  { path: 'documentation/fg/transaction', component: TrFgComponent, canActivate: [AuthGuard] },
  { path: 'documentation/material', component: DocumentationMaterialIndexComponent, canActivate: [AuthGuard] },
  { path: 'documentation/material/master', component: MasterMaterialComponent, canActivate: [AuthGuard] },
  { path: 'documentation/material/transaction', component: TrMaterialComponent, canActivate: [AuthGuard] },
  { path: 'documentation/packaging', component: IndexPackagingDocumentationComponent, canActivate: [AuthGuard] },
  { path: 'documentation/packaging/master', component: MasterPackagingComponent, canActivate: [AuthGuard] },
  { path: 'documentation/packaging/transaction', component: TrPackagingComponent, canActivate: [AuthGuard] },
  { path: 'documentation/tools', component: DocumentationToolsIndexComponent, canActivate: [AuthGuard] },
  { path: 'documentation/tools/master', component: MasterToolsComponent, canActivate: [AuthGuard] },
  { path: 'documentation/tools/transaction', component: TrToolsComponent, canActivate: [AuthGuard] },
  { path: 'documentation/section', component: MasterSectionComponent, canActivate: [AuthGuard] },
  { path: 'documentation/storage', component: MasterStorageComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
