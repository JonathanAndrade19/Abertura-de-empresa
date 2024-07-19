import { Routes } from '@angular/router';
import { SolicitarAberturaEmpresaComponent } from './shared/component/solicitar-abertura-empresa/solicitar-abertura-empresa.component';
import { EmpresaComponent } from './shared/component/empresa/empresa.component';
export const routes: Routes = [
    {
        path: '',
        component: EmpresaComponent,
    },
    {
        path: 'empresa',
        component: SolicitarAberturaEmpresaComponent,
    },
    {
        path: 'empresa/:id',
        component: SolicitarAberturaEmpresaComponent,
    }
];
