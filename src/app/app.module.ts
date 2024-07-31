
import { QRCodeModule } from 'angularx-qrcode';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { IndexToolsComponent } from './pages/tools/index-tools/index-tools.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IndexMaterialComponent } from './pages/material/index-material/index-material.component';
import { IndexPackagingComponent } from './pages/packaging/index-packaging/index-packaging.component';
import { IndexFgComponent } from './pages/fg/index-fg/index-fg.component';
import { CreateFgComponent } from './pages/fg/create-fg/create-fg.component';
import { UpdateFgComponent } from './pages/fg/update-fg/update-fg.component';
import { CreateMaterialComponent } from './pages/material/create-material/create-material.component';
import { UpdateMaterialComponent } from './pages/material/update-material/update-material.component';
import { CreatePackagingComponent } from './pages/packaging/create-packaging/create-packaging.component';
import { UpdatePackagingComponent } from './pages/packaging/update-packaging/update-packaging.component';
import { CreateToolsComponent } from './pages/tools/create-tools/create-tools.component';
import { UpdateToolsComponent } from './pages/tools/update-tools/update-tools.component';
import { DetailToolsComponent } from './pages/tools/detail-tools/detail-tools.component';
import { DetailPackagingComponent } from './pages/packaging/detail-packaging/detail-packaging.component';
import { DetailMaterialComponent } from './pages/material/detail-material/detail-material.component';
import { DetailFgComponent } from './pages/fg/detail-fg/detail-fg.component';
import { IndexSectionComponent } from './pages/sections/index-section/index-section.component';
import { CreateSectionComponent } from './pages/sections/create-section/create-section.component';
import { UpdateSectionComponent } from './pages/sections/update-section/update-section.component';
import { TemplateFgComponent } from './pages/fg/template-fg/template-fg.component';
import { TemplateMaterialComponent } from './pages/material/template-material/template-material.component';
import { TemplatePackagingComponent } from './pages/packaging/template-packaging/template-packaging.component';
import { TemplateToolsComponent } from './pages/tools/template-tools/template-tools.component';
import { NgxPrintModule } from 'ngx-print';
import { IndexDocumentationComponent } from './pages/documentation/index-documentation/index-documentation.component';
import { MasterFgComponent } from './pages/documentation/fg/master-fg/master-fg.component';
import { TrFgComponent } from './pages/documentation/fg/tr-fg/tr-fg.component';
import { MasterMaterialComponent } from './pages/documentation/material/master-material/master-material.component';

import { TrMaterialComponent } from './pages/documentation/material/tr-material/tr-material.component';
import { MasterPackagingComponent } from './pages/documentation/packaging/master-packaging/master-packaging.component';
import { TrPackagingComponent } from './pages/documentation/packaging/tr-packaging/tr-packaging.component';
import { MasterToolsComponent } from './pages/documentation/tools/master-tools/master-tools.component';
import { TrToolsComponent } from './pages/documentation/tools/tr-tools/tr-tools.component';
import { MasterSectionComponent } from './pages/documentation/section/master-section/master-section.component';
import { DocumentationFgIndexComponent } from './pages/documentation/fg/documentation-fg-index/documentation-fg-index.component';
import { DocumentationMaterialIndexComponent } from './pages/documentation/material/documentation-material-index/documentation-material-index.component';
import { DocumentationToolsIndexComponent } from './pages/documentation/tools/documentation-tools-index/documentation-tools-index.component';
import { IndexPackagingDocumentationComponent } from './pages/documentation/packaging/index-packaging-documentation/index-packaging-documentation.component';

import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { NgxExtendedPdfViewerCommonModule } from 'ngx-extended-pdf-viewer/lib/ngx-extended-pdf-viewer-common.module';
import { FormTransactionFgComponent } from './pages/fg/form-transaction-fg/form-transaction-fg.component';
import { FormTransactionMaterialComponent } from './pages/material/form-transaction-material/form-transaction-material.component';
import { FormTransactionPackagingComponent } from './pages/packaging/form-transaction-packaging/form-transaction-packaging.component';
import { FormTransactionToolsComponent } from './pages/tools/form-transaction-tools/form-transaction-tools.component';
import { CreateStorageComponent } from './pages/storages/create-storage/create-storage.component';
import { IndexStorageComponent } from './pages/storages/index-storage/index-storage.component';
import { UpdateStorageComponent } from './pages/storages/update-storage/update-storage.component';
import { MasterStorageComponent } from './pages/documentation/storage/master-storage/master-storage.component';
import { CreateUserComponent } from './pages/technical-user/create-user/create-user.component';
import { IndexUserComponent } from './pages/technical-user/index-user/index-user.component';
import { EditUserComponent } from './pages/technical-user/edit-user/edit-user.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    IndexToolsComponent,
    IndexMaterialComponent,
    IndexPackagingComponent,
    IndexFgComponent,
    CreateFgComponent,
    UpdateFgComponent,
    CreateMaterialComponent,
    UpdateMaterialComponent,
    CreatePackagingComponent,
    UpdatePackagingComponent,
    CreateToolsComponent,
    UpdateToolsComponent,
    DetailToolsComponent,
    DetailPackagingComponent,
    DetailMaterialComponent,
    DetailFgComponent,
    IndexSectionComponent,
    CreateSectionComponent,
    UpdateSectionComponent,
    TemplateFgComponent,
    TemplateMaterialComponent,
    TemplatePackagingComponent,
    TemplateToolsComponent,
    IndexDocumentationComponent,
    MasterFgComponent,
    TrFgComponent,
    MasterMaterialComponent,
    TrMaterialComponent,
    MasterPackagingComponent,
    TrPackagingComponent,
    MasterToolsComponent,
    TrToolsComponent,
    MasterSectionComponent,
    DocumentationFgIndexComponent,
    DocumentationMaterialIndexComponent,
    DocumentationToolsIndexComponent,
    IndexPackagingDocumentationComponent,
    FormTransactionFgComponent,
    FormTransactionMaterialComponent,
    FormTransactionPackagingComponent,
    FormTransactionToolsComponent,
    CreateStorageComponent,
    IndexStorageComponent,
    UpdateStorageComponent,
    MasterStorageComponent,
    CreateUserComponent,
    IndexUserComponent,
    EditUserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    QRCodeModule,
    NgxPrintModule,
    NgxJsonViewerModule,
    // NgxExtendedPdfViewerCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
