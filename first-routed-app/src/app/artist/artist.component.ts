import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit{
  routeObs: Observable<ParamMap>;
  spotifyServiceObs: Observable<Object>;
  artist: any;
  constructor(
    private service: SpotifyService,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void{
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }


  getRouterParam = (params: ParamMap) =>
  {
    let idartista = params.get('id');
    console.log(idartista);
    this.spotifyServiceObs = this.service.getArtist(idartista);
    this.spotifyServiceObs.subscribe((data)=>this.artist = data)
  }
}
