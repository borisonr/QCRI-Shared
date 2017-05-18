import 'jquery';
// import 'zone.js';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CommonQCRIModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(CommonQCRIModule);