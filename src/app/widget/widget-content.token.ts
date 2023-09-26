import { InjectionToken } from "@angular/core";
import { Reloadable } from "./widget-content";

export const RELOADABLE_CONTENT = new InjectionToken<Reloadable>('reloadable-content');