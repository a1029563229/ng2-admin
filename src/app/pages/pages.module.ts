import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { routing } from "./pages.routing";
import { NgaModule } from "../theme/nga.module";
import { AppTranslationModule } from "../app.translation.module";
import { API_SERVICE } from "./api";

import { Pages } from "./pages.component";

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing],
  declarations: [Pages],
  providers: [
    ...API_SERVICE
  ]
})
export class PagesModule {}
