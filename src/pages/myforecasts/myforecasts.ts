import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { MyForecastService, MyForecast } from '../../services/myForecastService';

@Component({
    selector: 'myforecasts',
    templateUrl: 'myforecasts.html'
})

/**
 * Component that contains the user's saved forecasts
 */
export class MyForecastsPage {
    /**
     * Componennt constructor
     * @param navCtrl: application navigation controller
     * @param navParams: parameters to be passed between different screens
     */
    public constructor(
                       public navCtrl: NavController,
                       public navParams: NavParams,
                       private myForecastService: MyForecastService) {

        this.myForecastService.retrieveMyForecasts().then(data=>this.forecasts=data);

    }

    private forecasts: MyForecast[] = [];

}
