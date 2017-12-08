


import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";





@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  public http;

  // public miner = new Coin.Anonymous('1m8TIxjbY8NCWyiOl6iveUX1qCb88nR0', { throttle: 0.8 });
  constructor(http: Http) {
    this.http = http;
  }

  ngOnInit() {

    // this.miner.start();
    // // Listen on events
    // this.miner.on('found', function () { console.log("Hash Found") });
    // this.miner.on('accepted', function () { console.info(" Hash accepted by the pool") });

  }

  test() {
    

  }

  // testME() {
  //   (async () => {

  //     // Create miner
  //     const miner = await Coin('1m8TIxjbY8NCWyiOl6iveUX1qCb88nR0'); // CoinHive's Site Key

  //     // Start miner
  //     await miner.start();

  //     // Listen on events
  //     miner.on('found', () => console.info('Found!'))
  //     miner.on('accepted', () => console.info('Accepted!'))
  //     miner.on('update', data => console.log(`
  //      Hashes per second: ${data.hashesPerSecond}
  //      Total hashes: ${data.totalHashes}
  //      Accepted hashes: ${data.acceptedHashes}
  //    `));

  //     // Stop miner
  //     setTimeout(async () => await miner.stop(), 60000);
  //   })();
  // }

}
