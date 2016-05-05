import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { FlexchatAppComponent } from '../app/flexchat.component';

beforeEachProviders(() => [FlexchatAppComponent]);

describe('App: Flexchat', () => {
  it('should create the app',
      inject([FlexchatAppComponent], (app: FlexchatAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'flexchat works!\'',
      inject([FlexchatAppComponent], (app: FlexchatAppComponent) => {
    expect(app.title).toEqual('flexchat works!');
  }));
});
