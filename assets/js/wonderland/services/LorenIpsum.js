angular.module('Wonderland.services')
  .factory('LorenIpsum', ['LorenIpsumSeed', 'Random', function (data, Random) {

    return function (min, max) {
      if (!max) {
        if (!min) {
          max = data.length;
          min = 1;
        } else {
          max = min;
          min = 1;
        }
      }

      var lines = Math.floor(Random() * (max - min) + min);
      var out = [];

      var index = Math.floor(Ranom() * data.length);
      debugger;
      while (out.length < lines) {
        out.push(data[index % data.length]);
        ++index;
      }

      return lines;
    }

  }]).factory('LorenIpsumSeed', function () {
    return ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque dui at neque volutpat tristique. Integer et sagittis felis. Nunc velit turpis, sodales a mi faucibus, molestie ullamcorper libero. Etiam nec laoreet lectus, eu scelerisque enim. Ut blandit eu lacus ut aliquet. Maecenas eleifend rhoncus felis, ac pellentesque ex varius in. Pellentesque urna elit, mattis et massa et, malesuada feugiat nibh. Donec at convallis justo. Integer venenatis egestas ex, quis euismod ex lacinia non. Aliquam vel tellus tincidunt, accumsan felis non, blandit elit. Praesent convallis tortor eget imperdiet pharetra. Duis hendrerit sollicitudin tempor. Duis fringilla sagittis massa eu ullamcorper.'
      , 'Duis eget justo eu mi euismod porttitor. Aliquam sed porttitor nunc, non ullamcorper risus. Aenean volutpat dictum felis vitae ornare. Pellentesque venenatis et lorem eu tempus. Donec feugiat sapien eu semper pretium. Nullam sit amet ex sodales, tempor ex et, feugiat tortor. Nullam cursus quis quam at tempus. Integer pulvinar dapibus elit. Ut tincidunt sem vel ipsum elementum scelerisque. Praesent quis nisi quis odio finibus porta. Nam placerat sem ac hendrerit hendrerit. Maecenas odio enim, laoreet non pellentesque vel, gravida dapibus risus. Cras id mollis ex. Cras placerat, purus non semper tempor, nulla ex eleifend lacus, ut aliquet justo risus at mi. Aenean sit amet ex at purus semper convallis nec ut ligula. Ut et mauris sit amet purus ultricies pulvinar in nec leo.'
      , 'Donec a nibh quis elit commodo auctor vel at augue. Ut lacinia scelerisque augue non ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed pharetra mattis viverra. Vivamus erat ex, suscipit quis quam id, fringilla accumsan mauris. Nam scelerisque, elit eu malesuada fermentum, felis lacus luctus ligula, nec mattis velit metus in augue. Nunc quis viverra enim. Donec nec dolor vehicula, dictum ligula eget, efficitur nulla. Etiam eget velit sit amet ipsum ullamcorper pulvinar. Vestibulum mi enim, tincidunt id nunc et, pharetra volutpat mi. Vestibulum laoreet sed ante eget mattis. Phasellus quis auctor augue. Nullam accumsan risus at eleifend convallis. Donec sollicitudin ante quis nunc hendrerit scelerisque.'
      , 'Sed leo ipsum, tempor non quam a, pellentesque iaculis ipsum. Suspendisse eget turpis varius, euismod nisl sit amet, dictum nisi. In faucibus, urna ac finibus sagittis, urna nunc finibus nisl, id dignissim ligula mauris sed sem. Cras non nulla eget ligula commodo commodo. Pellentesque eget ante a enim sodales facilisis eu at felis. In porta tincidunt mollis. Nam sit amet sollicitudin nunc. Nulla ut tellus lectus. Donec et dignissim lacus. Sed lobortis velit sed elit egestas efficitur. Etiam mollis, felis sed congue congue, ante leo convallis ligula, ut elementum massa odio sit amet ex.'
      , 'Ut volutpat nisl dapibus erat faucibus imperdiet. Ut imperdiet metus diam, id semper purus rutrum vel. Sed augue augue, dignissim et rhoncus et, rhoncus eu diam. Nunc auctor vestibulum venenatis. Vivamus lobortis ante ullamcorper, tincidunt orci a, euismod nisl. Praesent varius, magna et viverra maximus, nulla purus dapibus felis, in fermentum purus mi et tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vitae pharetra libero. Duis in libero sit amet risus volutpat facilisis sit amet vel lacus. Suspendisse consectetur et risus ac auctor. Aliquam vel turpis faucibus, pretium sem nec, ullamcorper felis. Nam ullamcorper, metus et accumsan consequat, justo nunc fermentum elit, at hendrerit leo justo sed urna. Phasellus sit amet bibendum lectus, ut blandit ipsum. Nam imperdiet, leo at molestie fringilla, tellus tortor finibus risus, egestas ultrices tortor massa pellentesque lacus.'];
  }).factory('Random', function () {
    return function () {
      return Math.random();
    }
  });
