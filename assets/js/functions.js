window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function( e ){
  var offset = this.getBoundingClientRect();
  var x = e.pageX - offset.left;

  Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
});

document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';

Amplitude.init({
  "shuffle_on": true,
  "bindings": {
    37: 'prev',
    39: 'next',
    32: 'play_pause'
  },
  "songs": [
    {
      "name": "Nilsson Investment",
      "url": "./commercials/sv-SE/civil-engineering/nilsson-investment/16749268892360/commercial.mp3",
      "artist": "Civil Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Nilsson Andersson Investment",
      "url": "./commercials/sv-SE/international-trade-and-development/nilsson-andersson-investment/16749272003200/commercial.mp3",
      "artist": "International Trade And Development",
      "cover_art_url": "assets/img/krang/krang-radio-014.jpg"
    },
    {
      "name": "Larsson Aktiebolag",
      "url": "./commercials/sv-SE/music/larsson-aktiebolag/16749285574400/commercial.mp3",
      "artist": "Music",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Stlund Svensson Group",
      "url": "./commercials/sv-SE/computer-networking/stlund-svensson-group/16749263821920/commercial.mp3",
      "artist": "Computer Networking",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "Johansson Gustafsson",
      "url": "./commercials/sv-SE/accounting/johansson-gustafsson/16749282092770/commercial.mp3",
      "artist": "Accounting",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Johansson Ab",
      "url": "./commercials/sv-SE/management-consulting/johansson-ab/16749265425140/commercial.mp3",
      "artist": "Management Consulting",
      "cover_art_url": "assets/img/krang/krang-radio-001.jpg"
    },
    {
      "name": "Gustafsson Karlsson Gruppen",
      "url": "./commercials/sv-SE/venture-capital-private-equity/gustafsson-karlsson-gruppen/16749275965480/commercial.mp3",
      "artist": "Venture Capital Private Equity",
      "cover_art_url": "assets/img/krang/krang-radio-086.jpg"
    },
    {
      "name": "Persson Persson Group",
      "url": "./commercials/sv-SE/luxury-goods-jewelry/persson-persson-group/16749263160850/commercial.mp3",
      "artist": "Luxury Goods Jewelry",
      "cover_art_url": "assets/img/krang/krang-radio-063.jpg"
    },
    {
      "name": "Nglund Eriksson",
      "url": "./commercials/sv-SE/investment-banking/nglund-eriksson/16749276149660/commercial.mp3",
      "artist": "Investment Banking",
      "cover_art_url": "assets/img/krang/krang-radio-072.jpg"
    },
    {
      "name": "Olsson Eriksson",
      "url": "./commercials/sv-SE/nanotechnology/olsson-eriksson/16749287348980/commercial.mp3",
      "artist": "Nanotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-074.jpg"
    },
    {
      "name": "Andersson Karlsson",
      "url": "./commercials/sv-SE/philanthropy/andersson-karlsson/16749277674250/commercial.mp3",
      "artist": "Philanthropy",
      "cover_art_url": "assets/img/krang/krang-radio-087.jpg"
    },
    {
      "name": "Svensson Eriksson Aktiebolag",
      "url": "./commercials/sv-SE/furniture/svensson-eriksson-aktiebolag/16749266811720/commercial.mp3",
      "artist": "Furniture",
      "cover_art_url": "assets/img/krang/krang-radio-037.jpg"
    },
    {
      "name": "Persson Ab",
      "url": "./commercials/sv-SE/consumer-services/persson-ab/16749264960590/commercial.mp3",
      "artist": "Consumer Services",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Slund Group",
      "url": "./commercials/sv-SE/photography/slund-group/16749268499020/commercial.mp3",
      "artist": "Photography",
      "cover_art_url": "assets/img/krang/krang-radio-010.jpg"
    },
    {
      "name": "Karlsson Ab",
      "url": "./commercials/sv-SE/marketing-and-advertising/karlsson-ab/16749268784630/commercial.mp3",
      "artist": "Marketing And Advertising",
      "cover_art_url": "assets/img/krang/krang-radio-074.jpg"
    },
    {
      "name": "Nilsson Persson Ab",
      "url": "./commercials/sv-SE/restaurants/nilsson-persson-ab/16749278761150/commercial.mp3",
      "artist": "Restaurants",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Andersson Kommanditbolag",
      "url": "./commercials/sv-SE/renewables-environment/andersson-kommanditbolag/16749276956330/commercial.mp3",
      "artist": "Renewables Environment",
      "cover_art_url": "assets/img/krang/krang-radio-036.jpg"
    },
    {
      "name": "Andersson Larsson",
      "url": "./commercials/sv-SE/chemicals/andersson-larsson/16749268410320/commercial.mp3",
      "artist": "Chemicals",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Olsson Nglund",
      "url": "./commercials/sv-SE/chemicals/olsson-nglund/16749288749880/commercial.mp3",
      "artist": "Chemicals",
      "cover_art_url": "assets/img/krang/krang-radio-012.jpg"
    },
    {
      "name": "Andersson Johansson Aktiebolag",
      "url": "./commercials/sv-SE/religious-institutions/andersson-johansson-aktiebolag/16749268985320/commercial.mp3",
      "artist": "Religious Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Slund Investment",
      "url": "./commercials/sv-SE/supermarkets/slund-investment/16749282738150/commercial.mp3",
      "artist": "Supermarkets",
      "cover_art_url": "assets/img/krang/krang-radio-003.jpg"
    },
    {
      "name": "Svensson Persson",
      "url": "./commercials/sv-SE/architecture-planning/svensson-persson/16749286231860/commercial.mp3",
      "artist": "Architecture Planning",
      "cover_art_url": "assets/img/krang/krang-radio-008.jpg"
    },
    {
      "name": "Olsson Svensson Group",
      "url": "./commercials/sv-SE/plastics/olsson-svensson-group/16749284946440/commercial.mp3",
      "artist": "Plastics",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Larsson Investment",
      "url": "./commercials/sv-SE/primary-secondary-education/larsson-investment/16749268689060/commercial.mp3",
      "artist": "Primary Secondary Education",
      "cover_art_url": "assets/img/krang/krang-radio-026.jpg"
    },
    {
      "name": "Larsson Kommanditbolag",
      "url": "./commercials/sv-SE/computer-networking/larsson-kommanditbolag/16749277854330/commercial.mp3",
      "artist": "Computer Networking",
      "cover_art_url": "assets/img/krang/krang-radio-040.jpg"
    },
    {
      "name": "Nglund Investment",
      "url": "./commercials/sv-SE/market-research/nglund-investment/16749284065260/commercial.mp3",
      "artist": "Market Research",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Eriksson Karlsson",
      "url": "./commercials/sv-SE/legislative-office/eriksson-karlsson/16749264876490/commercial.mp3",
      "artist": "Legislative Office",
      "cover_art_url": "assets/img/krang/krang-radio-020.jpg"
    },
    {
      "name": "Nglund Nglund Group",
      "url": "./commercials/sv-SE/package-freight-delivery/nglund-nglund-group/16749274924510/commercial.mp3",
      "artist": "Package Freight Delivery",
      "cover_art_url": "assets/img/krang/krang-radio-063.jpg"
    },
    {
      "name": "Stlund Stlund",
      "url": "./commercials/sv-SE/investment-banking/stlund-stlund/16749277595310/commercial.mp3",
      "artist": "Investment Banking",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "Johansson Investment",
      "url": "./commercials/sv-SE/e-learning/johansson-investment/16749263725380/commercial.mp3",
      "artist": "E Learning",
      "cover_art_url": "assets/img/krang/krang-radio-026.jpg"
    },
    {
      "name": "Svensson Ab",
      "url": "./commercials/sv-SE/nanotechnology/svensson-ab/16749276853220/commercial.mp3",
      "artist": "Nanotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "Larsson Gruppen",
      "url": "./commercials/sv-SE/accounting/larsson-gruppen/16749262655570/commercial.mp3",
      "artist": "Accounting",
      "cover_art_url": "assets/img/krang/krang-radio-070.jpg"
    },
    {
      "name": "Larsson Ab",
      "url": "./commercials/sv-SE/legislative-office/larsson-ab/16749286443990/commercial.mp3",
      "artist": "Legislative Office",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Karlsson Group",
      "url": "./commercials/sv-SE/hospitality/karlsson-group/16749274516050/commercial.mp3",
      "artist": "Hospitality",
      "cover_art_url": "assets/img/krang/krang-radio-040.jpg"
    },
    {
      "name": "Gustafsson Investment",
      "url": "./commercials/sv-SE/paper-forest-products/gustafsson-investment/16749274412730/commercial.mp3",
      "artist": "Paper Forest Products",
      "cover_art_url": "assets/img/krang/krang-radio-064.jpg"
    },
    {
      "name": "Persson Hb",
      "url": "./commercials/sv-SE/semiconductors/persson-hb/16749273040660/commercial.mp3",
      "artist": "Semiconductors",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Andersson Kommanditbolag",
      "url": "./commercials/sv-SE/logistics-and-supply-chain/andersson-kommanditbolag/16749272092240/commercial.mp3",
      "artist": "Logistics And Supply Chain",
      "cover_art_url": "assets/img/krang/krang-radio-060.jpg"
    },
    {
      "name": "Johansson Hb",
      "url": "./commercials/sv-SE/legislative-office/johansson-hb/16749270760150/commercial.mp3",
      "artist": "Legislative Office",
      "cover_art_url": "assets/img/krang/krang-radio-026.jpg"
    },
    {
      "name": "Stlund Nglund",
      "url": "./commercials/sv-SE/primary-secondary-education/stlund-nglund/16749281995550/commercial.mp3",
      "artist": "Primary Secondary Education",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Olsson Hb",
      "url": "./commercials/sv-SE/recreational-facilities-and-services/olsson-hb/16749281752680/commercial.mp3",
      "artist": "Recreational Facilities And Services",
      "cover_art_url": "assets/img/krang/krang-radio-018.jpg"
    },
    {
      "name": "Stlund Investment",
      "url": "./commercials/sv-SE/banking/stlund-investment/16749282542320/commercial.mp3",
      "artist": "Banking",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Svensson Kommanditbolag",
      "url": "./commercials/sv-SE/fishery/svensson-kommanditbolag/16749263070980/commercial.mp3",
      "artist": "Fishery",
      "cover_art_url": "assets/img/krang/krang-radio-081.jpg"
    },
    {
      "name": "Gustafsson Larsson Gruppen",
      "url": "./commercials/sv-SE/computer-software/gustafsson-larsson-gruppen/16749268583150/commercial.mp3",
      "artist": "Computer Software",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Eriksson Johansson Aktiebolag",
      "url": "./commercials/sv-SE/airlines-aviation/eriksson-johansson-aktiebolag/16749272552880/commercial.mp3",
      "artist": "Airlines Aviation",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Nilsson Persson",
      "url": "./commercials/sv-SE/building-materials/nilsson-persson/16749281010460/commercial.mp3",
      "artist": "Building Materials",
      "cover_art_url": "assets/img/krang/krang-radio-053.jpg"
    },
    {
      "name": "Svensson Nglund Investment",
      "url": "./commercials/sv-SE/real-estate/svensson-nglund-investment/16749271557700/commercial.mp3",
      "artist": "Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-093.jpg"
    },
    {
      "name": "Stlund Gruppen",
      "url": "./commercials/sv-SE/logistics-and-supply-chain/stlund-gruppen/16749265250480/commercial.mp3",
      "artist": "Logistics And Supply Chain",
      "cover_art_url": "assets/img/krang/krang-radio-080.jpg"
    },
    {
      "name": "Nilsson Slund Gruppen",
      "url": "./commercials/sv-SE/higher-education/nilsson-slund-gruppen/16749274624350/commercial.mp3",
      "artist": "Higher Education",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Andersson Group",
      "url": "./commercials/sv-SE/online-media/andersson-group/16749273261320/commercial.mp3",
      "artist": "Online Media",
      "cover_art_url": "assets/img/krang/krang-radio-024.jpg"
    },
    {
      "name": "Persson Johansson Kommanditbolag",
      "url": "./commercials/sv-SE/e-learning/persson-johansson-kommanditbolag/16749270483710/commercial.mp3",
      "artist": "E Learning",
      "cover_art_url": "assets/img/krang/krang-radio-029.jpg"
    },
    {
      "name": "Nilsson Group",
      "url": "./commercials/sv-SE/public-safety/nilsson-group/16749277395510/commercial.mp3",
      "artist": "Public Safety",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "Eriksson Svensson Kommanditbolag",
      "url": "./commercials/sv-SE/consumer-services/eriksson-svensson-kommanditbolag/16749273792520/commercial.mp3",
      "artist": "Consumer Services",
      "cover_art_url": "assets/img/krang/krang-radio-045.jpg"
    },
    {
      "name": "Nilsson Investment",
      "url": "./commercials/sv-SE/alternative-dispute-resolution/nilsson-investment/16749283251690/commercial.mp3",
      "artist": "Alternative Dispute Resolution",
      "cover_art_url": "assets/img/krang/krang-radio-051.jpg"
    },
    {
      "name": "Svensson Karlsson",
      "url": "./commercials/sv-SE/leisure-travel-tourism/svensson-karlsson/16749281907630/commercial.mp3",
      "artist": "Leisure Travel Tourism",
      "cover_art_url": "assets/img/krang/krang-radio-062.jpg"
    },
    {
      "name": "Andersson Nilsson Investment",
      "url": "./commercials/sv-SE/wholesale/andersson-nilsson-investment/16749277492020/commercial.mp3",
      "artist": "Wholesale",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Larsson Johansson",
      "url": "./commercials/sv-SE/consumer-electronics/larsson-johansson/16749266654640/commercial.mp3",
      "artist": "Consumer Electronics",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Nglund Stlund Hb",
      "url": "./commercials/sv-SE/fine-art/nglund-stlund-hb/16749285866840/commercial.mp3",
      "artist": "Fine Art",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "Olsson Karlsson Investment",
      "url": "./commercials/sv-SE/design/olsson-karlsson-investment/16749275370020/commercial.mp3",
      "artist": "Design",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Karlsson Karlsson Investment",
      "url": "./commercials/sv-SE/wine-and-spirits/karlsson-karlsson-investment/16749269549320/commercial.mp3",
      "artist": "Wine And Spirits",
      "cover_art_url": "assets/img/krang/krang-radio-004.jpg"
    },
    {
      "name": "Persson Slund Hb",
      "url": "./commercials/sv-SE/business-supplies-and-equipment/persson-slund-hb/16749286719660/commercial.mp3",
      "artist": "Business Supplies And Equipment",
      "cover_art_url": "assets/img/krang/krang-radio-085.jpg"
    },
    {
      "name": "Svensson Eriksson",
      "url": "./commercials/sv-SE/printing/svensson-eriksson/16749280567790/commercial.mp3",
      "artist": "Printing",
      "cover_art_url": "assets/img/krang/krang-radio-064.jpg"
    },
    {
      "name": "Nilsson Svensson",
      "url": "./commercials/sv-SE/design/nilsson-svensson/16749288214200/commercial.mp3",
      "artist": "Design",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "Svensson Olsson Ab",
      "url": "./commercials/sv-SE/furniture/svensson-olsson-ab/16749281834030/commercial.mp3",
      "artist": "Furniture",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Svensson Stlund Investment",
      "url": "./commercials/sv-SE/railroad-manufacture/svensson-stlund-investment/16749267376300/commercial.mp3",
      "artist": "Railroad Manufacture",
      "cover_art_url": "assets/img/krang/krang-radio-077.jpg"
    },
    {
      "name": "Eriksson Persson Group",
      "url": "./commercials/sv-SE/translation-and-localization/eriksson-persson-group/16749273603530/commercial.mp3",
      "artist": "Translation And Localization",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "Nglund Olsson Gruppen",
      "url": "./commercials/sv-SE/consumer-electronics/nglund-olsson-gruppen/16749268047910/commercial.mp3",
      "artist": "Consumer Electronics",
      "cover_art_url": "assets/img/krang/krang-radio-025.jpg"
    },
    {
      "name": "Nilsson Gruppen",
      "url": "./commercials/sv-SE/ranching/nilsson-gruppen/16749285061460/commercial.mp3",
      "artist": "Ranching",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Olsson Nglund",
      "url": "./commercials/sv-SE/facilities-services/olsson-nglund/16749285403230/commercial.mp3",
      "artist": "Facilities Services",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Larsson Larsson",
      "url": "./commercials/sv-SE/chemicals/larsson-larsson/16749278391440/commercial.mp3",
      "artist": "Chemicals",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Slund Investment",
      "url": "./commercials/sv-SE/government-administration/slund-investment/16749264376050/commercial.mp3",
      "artist": "Government Administration",
      "cover_art_url": "assets/img/krang/krang-radio-093.jpg"
    },
    {
      "name": "Stlund Ab",
      "url": "./commercials/sv-SE/glass-ceramics-concrete/stlund-ab/16749278591790/commercial.mp3",
      "artist": "Glass Ceramics Concrete",
      "cover_art_url": "assets/img/krang/krang-radio-044.jpg"
    },
    {
      "name": "Stlund Investment",
      "url": "./commercials/sv-SE/construction/stlund-investment/16749282637240/commercial.mp3",
      "artist": "Construction",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Nglund Johansson Ab",
      "url": "./commercials/sv-SE/supermarkets/nglund-johansson-ab/16749276684320/commercial.mp3",
      "artist": "Supermarkets",
      "cover_art_url": "assets/img/krang/krang-radio-042.jpg"
    },
    {
      "name": "Svensson Olsson",
      "url": "./commercials/sv-SE/supermarkets/svensson-olsson/16749277945320/commercial.mp3",
      "artist": "Supermarkets",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Stlund Larsson Ab",
      "url": "./commercials/sv-SE/apparel-fashion/stlund-larsson-ab/16749278958070/commercial.mp3",
      "artist": "Apparel Fashion",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Stlund Larsson Kommanditbolag",
      "url": "./commercials/sv-SE/music/stlund-larsson-kommanditbolag/16749264117280/commercial.mp3",
      "artist": "Music",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Stlund Gustafsson Investment",
      "url": "./commercials/sv-SE/sports/stlund-gustafsson-investment/16749280033850/commercial.mp3",
      "artist": "Sports",
      "cover_art_url": "assets/img/krang/krang-radio-086.jpg"
    },
    {
      "name": "Eriksson Investment",
      "url": "./commercials/sv-SE/sporting-goods/eriksson-investment/16749280292960/commercial.mp3",
      "artist": "Sporting Goods",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Andersson Stlund Group",
      "url": "./commercials/sv-SE/business-supplies-and-equipment/andersson-stlund-group/16749263457930/commercial.mp3",
      "artist": "Business Supplies And Equipment",
      "cover_art_url": "assets/img/krang/krang-radio-070.jpg"
    },
    {
      "name": "Andersson Slund",
      "url": "./commercials/sv-SE/security-and-investigations/andersson-slund/16749269731310/commercial.mp3",
      "artist": "Security And Investigations",
      "cover_art_url": "assets/img/krang/krang-radio-094.jpg"
    },
    {
      "name": "Nglund Nilsson",
      "url": "./commercials/sv-SE/government-relations/nglund-nilsson/16749264553970/commercial.mp3",
      "artist": "Government Relations",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Johansson Larsson",
      "url": "./commercials/sv-SE/security-and-investigations/johansson-larsson/16749282292490/commercial.mp3",
      "artist": "Security And Investigations",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Nilsson Svensson Kommanditbolag",
      "url": "./commercials/sv-SE/electrical-electronic-manufacturing/nilsson-svensson-kommanditbolag/16749268248910/commercial.mp3",
      "artist": "Electrical Electronic Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-068.jpg"
    },
    {
      "name": "Nglund Ab",
      "url": "./commercials/sv-SE/medical-practice/nglund-ab/16749266961160/commercial.mp3",
      "artist": "Medical Practice",
      "cover_art_url": "assets/img/krang/krang-radio-086.jpg"
    },
    {
      "name": "Gustafsson Andersson Hb",
      "url": "./commercials/sv-SE/veterinary/gustafsson-andersson-hb/16749270415550/commercial.mp3",
      "artist": "Veterinary",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "Nilsson Slund Hb",
      "url": "./commercials/sv-SE/banking/nilsson-slund-hb/16749262989600/commercial.mp3",
      "artist": "Banking",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "Eriksson Kommanditbolag",
      "url": "./commercials/sv-SE/nonprofit-organization-management/eriksson-kommanditbolag/16749275276700/commercial.mp3",
      "artist": "Nonprofit Organization Management",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Svensson Karlsson",
      "url": "./commercials/sv-SE/automotive/svensson-karlsson/16749287585200/commercial.mp3",
      "artist": "Automotive",
      "cover_art_url": "assets/img/krang/krang-radio-066.jpg"
    },
    {
      "name": "Gustafsson Andersson",
      "url": "./commercials/sv-SE/textiles/gustafsson-andersson/16749275616570/commercial.mp3",
      "artist": "Textiles",
      "cover_art_url": "assets/img/krang/krang-radio-068.jpg"
    },
    {
      "name": "Svensson Eriksson Kommanditbolag",
      "url": "./commercials/sv-SE/legal-services/svensson-eriksson-kommanditbolag/16749269369590/commercial.mp3",
      "artist": "Legal Services",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Gustafsson Persson Group",
      "url": "./commercials/sv-SE/environmental-services/gustafsson-persson-group/16749282196560/commercial.mp3",
      "artist": "Environmental Services",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "Slund Gruppen",
      "url": "./commercials/sv-SE/industrial-automation/slund-gruppen/16749271244600/commercial.mp3",
      "artist": "Industrial Automation",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Nglund Aktiebolag",
      "url": "./commercials/sv-SE/paper-forest-products/nglund-aktiebolag/16749281283740/commercial.mp3",
      "artist": "Paper Forest Products",
      "cover_art_url": "assets/img/krang/krang-radio-042.jpg"
    },
    {
      "name": "Svensson Olsson Investment",
      "url": "./commercials/sv-SE/media-production/svensson-olsson-investment/16749283505940/commercial.mp3",
      "artist": "Media Production",
      "cover_art_url": "assets/img/krang/krang-radio-086.jpg"
    },
    {
      "name": "Olsson Kommanditbolag",
      "url": "./commercials/sv-SE/military/olsson-kommanditbolag/16749283062040/commercial.mp3",
      "artist": "Military",
      "cover_art_url": "assets/img/krang/krang-radio-032.jpg"
    },
    {
      "name": "Stlund Gruppen",
      "url": "./commercials/sv-SE/government-relations/stlund-gruppen/16749281660020/commercial.mp3",
      "artist": "Government Relations",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Nilsson Hb",
      "url": "./commercials/sv-SE/sports/nilsson-hb/16749264261310/commercial.mp3",
      "artist": "Sports",
      "cover_art_url": "assets/img/krang/krang-radio-023.jpg"
    },
    {
      "name": "Nglund Investment",
      "url": "./commercials/sv-SE/utilities/nglund-investment/16749280821230/commercial.mp3",
      "artist": "Utilities",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Stlund Johansson Group",
      "url": "./commercials/sv-SE/leisure-travel-tourism/stlund-johansson-group/16749286544380/commercial.mp3",
      "artist": "Leisure Travel Tourism",
      "cover_art_url": "assets/img/krang/krang-radio-015.jpg"
    },
    {
      "name": "Svensson Group",
      "url": "./commercials/sv-SE/internet/svensson-group/16749288653900/commercial.mp3",
      "artist": "Internet",
      "cover_art_url": "assets/img/krang/krang-radio-063.jpg"
    },
    {
      "name": "Nilsson Gruppen",
      "url": "./commercials/sv-SE/professional-training-coaching/nilsson-gruppen/16749273702170/commercial.mp3",
      "artist": "Professional Training Coaching",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Karlsson Olsson",
      "url": "./commercials/sv-SE/law-practice/karlsson-olsson/16749283876070/commercial.mp3",
      "artist": "Law Practice",
      "cover_art_url": "assets/img/krang/krang-radio-074.jpg"
    },
    {
      "name": "Eriksson Persson",
      "url": "./commercials/sv-SE/mining-metals/eriksson-persson/16749274178110/commercial.mp3",
      "artist": "Mining Metals",
      "cover_art_url": "assets/img/krang/krang-radio-087.jpg"
    },
    {
      "name": "Nilsson Svensson",
      "url": "./commercials/sv-SE/political-organization/nilsson-svensson/16749280734160/commercial.mp3",
      "artist": "Political Organization",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Nilsson Larsson Investment",
      "url": "./commercials/sv-SE/tobacco/nilsson-larsson-investment/16749274104880/commercial.mp3",
      "artist": "Tobacco",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Larsson Kommanditbolag",
      "url": "./commercials/sv-SE/hospitality/larsson-kommanditbolag/16749263255800/commercial.mp3",
      "artist": "Hospitality",
      "cover_art_url": "assets/img/krang/krang-radio-086.jpg"
    },
    {
      "name": "Nglund Nilsson Ab",
      "url": "./commercials/sv-SE/cosmetics/nglund-nilsson-ab/16749275520910/commercial.mp3",
      "artist": "Cosmetics",
      "cover_art_url": "assets/img/krang/krang-radio-008.jpg"
    },
    {
      "name": "Persson Svensson Hb",
      "url": "./commercials/sv-SE/consumer-electronics/persson-svensson-hb/16749269632370/commercial.mp3",
      "artist": "Consumer Electronics",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Nilsson Svensson Hb",
      "url": "./commercials/sv-SE/translation-and-localization/nilsson-svensson-hb/16749287020310/commercial.mp3",
      "artist": "Translation And Localization",
      "cover_art_url": "assets/img/krang/krang-radio-085.jpg"
    },
    {
      "name": "Nilsson Slund",
      "url": "./commercials/sv-SE/architecture-planning/nilsson-slund/16749270246250/commercial.mp3",
      "artist": "Architecture Planning",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Eriksson Gruppen",
      "url": "./commercials/sv-SE/e-learning/eriksson-gruppen/16749276343470/commercial.mp3",
      "artist": "E Learning",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Slund Larsson Ab",
      "url": "./commercials/sv-SE/food-beverages/slund-larsson-ab/16749267727220/commercial.mp3",
      "artist": "Food Beverages",
      "cover_art_url": "assets/img/krang/krang-radio-021.jpg"
    },
    {
      "name": "Stlund Slund Hb",
      "url": "./commercials/sv-SE/computer-networking/stlund-slund-hb/16749284714580/commercial.mp3",
      "artist": "Computer Networking",
      "cover_art_url": "assets/img/krang/krang-radio-036.jpg"
    },
    {
      "name": "Andersson Eriksson",
      "url": "./commercials/sv-SE/consumer-goods/andersson-eriksson/16749272391790/commercial.mp3",
      "artist": "Consumer Goods",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Olsson Nglund Group",
      "url": "./commercials/sv-SE/real-estate/olsson-nglund-group/16749282927800/commercial.mp3",
      "artist": "Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "Persson Aktiebolag",
      "url": "./commercials/sv-SE/law-practice/persson-aktiebolag/16749273915930/commercial.mp3",
      "artist": "Law Practice",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Eriksson Nilsson Hb",
      "url": "./commercials/sv-SE/cosmetics/eriksson-nilsson-hb/16749282395450/commercial.mp3",
      "artist": "Cosmetics",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Eriksson Nglund Group",
      "url": "./commercials/sv-SE/maritime/eriksson-nglund-group/16749267176230/commercial.mp3",
      "artist": "Maritime",
      "cover_art_url": "assets/img/krang/krang-radio-051.jpg"
    },
    {
      "name": "Stlund Ab",
      "url": "./commercials/sv-SE/philanthropy/stlund-ab/16749269816770/commercial.mp3",
      "artist": "Philanthropy",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "Olsson Eriksson",
      "url": "./commercials/sv-SE/plastics/olsson-eriksson/16749271074620/commercial.mp3",
      "artist": "Plastics",
      "cover_art_url": "assets/img/krang/krang-radio-091.jpg"
    },
    {
      "name": "Olsson Group",
      "url": "./commercials/sv-SE/fishery/olsson-group/16749265859120/commercial.mp3",
      "artist": "Fishery",
      "cover_art_url": "assets/img/krang/krang-radio-072.jpg"
    },
    {
      "name": "Larsson Olsson",
      "url": "./commercials/sv-SE/transportationg-trucking-railroad/larsson-olsson/16749264655920/commercial.mp3",
      "artist": "Transportationg Trucking Railroad",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Nglund Gruppen",
      "url": "./commercials/sv-SE/political-organization/nglund-gruppen/16749277042920/commercial.mp3",
      "artist": "Political Organization",
      "cover_art_url": "assets/img/krang/krang-radio-001.jpg"
    },
    {
      "name": "Johansson Group",
      "url": "./commercials/sv-SE/telecommunications/johansson-group/16749270650720/commercial.mp3",
      "artist": "Telecommunications",
      "cover_art_url": "assets/img/krang/krang-radio-034.jpg"
    },
    {
      "name": "Svensson Svensson Kommanditbolag",
      "url": "./commercials/sv-SE/wine-and-spirits/svensson-svensson-kommanditbolag/16749262570420/commercial.mp3",
      "artist": "Wine And Spirits",
      "cover_art_url": "assets/img/krang/krang-radio-021.jpg"
    },
    {
      "name": "Slund Investment",
      "url": "./commercials/sv-SE/online-media/slund-investment/16749280185630/commercial.mp3",
      "artist": "Online Media",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Nilsson Group",
      "url": "./commercials/sv-SE/paper-forest-products/nilsson-group/16749266731810/commercial.mp3",
      "artist": "Paper Forest Products",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Johansson Kommanditbolag",
      "url": "./commercials/sv-SE/industrial-automation/johansson-kommanditbolag/16749285702750/commercial.mp3",
      "artist": "Industrial Automation",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Olsson Investment",
      "url": "./commercials/sv-SE/food-beverages/olsson-investment/16749265689590/commercial.mp3",
      "artist": "Food Beverages",
      "cover_art_url": "assets/img/krang/krang-radio-015.jpg"
    },
    {
      "name": "Gustafsson Slund",
      "url": "./commercials/sv-SE/sporting-goods/gustafsson-slund/16749272278530/commercial.mp3",
      "artist": "Sporting Goods",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Persson Slund Aktiebolag",
      "url": "./commercials/sv-SE/fine-art/persson-slund-aktiebolag/16749286909150/commercial.mp3",
      "artist": "Fine Art",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Eriksson Nglund",
      "url": "./commercials/sv-SE/mental-health-care/eriksson-nglund/16749265053750/commercial.mp3",
      "artist": "Mental Health Care",
      "cover_art_url": "assets/img/krang/krang-radio-063.jpg"
    },
    {
      "name": "Nglund Kommanditbolag",
      "url": "./commercials/sv-SE/packaging-and-containers/nglund-kommanditbolag/16749270142030/commercial.mp3",
      "artist": "Packaging And Containers",
      "cover_art_url": "assets/img/krang/krang-radio-082.jpg"
    },
    {
      "name": "Svensson Stlund",
      "url": "./commercials/sv-SE/apparel-fashion/svensson-stlund/16749268149460/commercial.mp3",
      "artist": "Apparel Fashion",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Larsson Svensson",
      "url": "./commercials/sv-SE/sports/larsson-svensson/16749288109330/commercial.mp3",
      "artist": "Sports",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Stlund Gustafsson Aktiebolag",
      "url": "./commercials/sv-SE/alternative-medicine/stlund-gustafsson-aktiebolag/16749280649180/commercial.mp3",
      "artist": "Alternative Medicine",
      "cover_art_url": "assets/img/krang/krang-radio-021.jpg"
    },
    {
      "name": "Nilsson Olsson Investment",
      "url": "./commercials/sv-SE/information-technology-and-services/nilsson-olsson-investment/16749286335120/commercial.mp3",
      "artist": "Information Technology And Services",
      "cover_art_url": "assets/img/krang/krang-radio-061.jpg"
    },
    {
      "name": "Slund Ab",
      "url": "./commercials/sv-SE/broadcast-media/slund-ab/16749281097930/commercial.mp3",
      "artist": "Broadcast Media",
      "cover_art_url": "assets/img/krang/krang-radio-046.jpg"
    },
    {
      "name": "Gustafsson Gruppen",
      "url": "./commercials/sv-SE/international-trade-and-development/gustafsson-gruppen/16749288290070/commercial.mp3",
      "artist": "International Trade And Development",
      "cover_art_url": "assets/img/krang/krang-radio-020.jpg"
    },
    {
      "name": "Stlund Investment",
      "url": "./commercials/sv-SE/political-organization/stlund-investment/16749264452270/commercial.mp3",
      "artist": "Political Organization",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Gustafsson Investment",
      "url": "./commercials/sv-SE/civil-engineering/gustafsson-investment/16749266889310/commercial.mp3",
      "artist": "Civil Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-023.jpg"
    },
    {
      "name": "Larsson Johansson Ab",
      "url": "./commercials/sv-SE/consumer-goods/larsson-johansson-ab/16749267080750/commercial.mp3",
      "artist": "Consumer Goods",
      "cover_art_url": "assets/img/krang/krang-radio-004.jpg"
    },
    {
      "name": "Persson Johansson",
      "url": "./commercials/sv-SE/defense-space/persson-johansson/16749279582870/commercial.mp3",
      "artist": "Defense Space",
      "cover_art_url": "assets/img/krang/krang-radio-015.jpg"
    },
    {
      "name": "Svensson Ab",
      "url": "./commercials/sv-SE/arts-and-crafts/svensson-ab/16749279204370/commercial.mp3",
      "artist": "Arts And Crafts",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Johansson Aktiebolag",
      "url": "./commercials/sv-SE/education-management/johansson-aktiebolag/16749271697640/commercial.mp3",
      "artist": "Education Management",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Nilsson Aktiebolag",
      "url": "./commercials/sv-SE/music/nilsson-aktiebolag/16749274010970/commercial.mp3",
      "artist": "Music",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Slund Group",
      "url": "./commercials/sv-SE/newspapers/slund-group/16749279314960/commercial.mp3",
      "artist": "Newspapers",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Olsson Nglund Group",
      "url": "./commercials/sv-SE/translation-and-localization/olsson-nglund-group/16749263545490/commercial.mp3",
      "artist": "Translation And Localization",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Nilsson Slund",
      "url": "./commercials/sv-SE/package-freight-delivery/nilsson-slund/16749274709050/commercial.mp3",
      "artist": "Package Freight Delivery",
      "cover_art_url": "assets/img/krang/krang-radio-061.jpg"
    },
    {
      "name": "Olsson Larsson Ab",
      "url": "./commercials/sv-SE/gambling-casinos/olsson-larsson-ab/16749270975810/commercial.mp3",
      "artist": "Gambling Casinos",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "Slund Group",
      "url": "./commercials/sv-SE/telecommunications/slund-group/16749271805850/commercial.mp3",
      "artist": "Telecommunications",
      "cover_art_url": "assets/img/krang/krang-radio-082.jpg"
    },
    {
      "name": "Eriksson Slund Aktiebolag",
      "url": "./commercials/sv-SE/railroad-manufacture/eriksson-slund-aktiebolag/16749270850510/commercial.mp3",
      "artist": "Railroad Manufacture",
      "cover_art_url": "assets/img/krang/krang-radio-016.jpg"
    },
    {
      "name": "Eriksson Group",
      "url": "./commercials/sv-SE/publishing/eriksson-group/16749278507060/commercial.mp3",
      "artist": "Publishing",
      "cover_art_url": "assets/img/krang/krang-radio-087.jpg"
    },
    {
      "name": "Persson Gustafsson",
      "url": "./commercials/sv-SE/electrical-electronic-manufacturing/persson-gustafsson/16749282833980/commercial.mp3",
      "artist": "Electrical Electronic Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Nglund Olsson",
      "url": "./commercials/sv-SE/nanotechnology/nglund-olsson/16749267960570/commercial.mp3",
      "artist": "Nanotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-097.jpg"
    },
    {
      "name": "Andersson Nilsson",
      "url": "./commercials/sv-SE/retail/andersson-nilsson/16749283340880/commercial.mp3",
      "artist": "Retail",
      "cover_art_url": "assets/img/krang/krang-radio-096.jpg"
    },
    {
      "name": "Larsson Larsson Hb",
      "url": "./commercials/sv-SE/chemicals/larsson-larsson-hb/16749279110840/commercial.mp3",
      "artist": "Chemicals",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "Olsson Johansson Gruppen",
      "url": "./commercials/sv-SE/electrical-electronic-manufacturing/olsson-johansson-gruppen/16749265516700/commercial.mp3",
      "artist": "Electrical Electronic Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-066.jpg"
    },
    {
      "name": "Larsson Stlund",
      "url": "./commercials/sv-SE/biotechnology/larsson-stlund/16749271343970/commercial.mp3",
      "artist": "Biotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-046.jpg"
    },
    {
      "name": "Karlsson Nilsson",
      "url": "./commercials/sv-SE/machinery/karlsson-nilsson/16749269075180/commercial.mp3",
      "artist": "Machinery",
      "cover_art_url": "assets/img/krang/krang-radio-094.jpg"
    },
    {
      "name": "Stlund Investment",
      "url": "./commercials/sv-SE/accounting/stlund-investment/16749288562210/commercial.mp3",
      "artist": "Accounting",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Eriksson Investment",
      "url": "./commercials/sv-SE/photography/eriksson-investment/16749275179470/commercial.mp3",
      "artist": "Photography",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Eriksson Nglund",
      "url": "./commercials/sv-SE/leisure-travel-tourism/eriksson-nglund/16749265609470/commercial.mp3",
      "artist": "Leisure Travel Tourism",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "Gustafsson Stlund",
      "url": "./commercials/sv-SE/libraries/gustafsson-stlund/16749288019950/commercial.mp3",
      "artist": "Libraries",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Nglund Group",
      "url": "./commercials/sv-SE/consumer-goods/nglund-group/16749264021850/commercial.mp3",
      "artist": "Consumer Goods",
      "cover_art_url": "assets/img/krang/krang-radio-014.jpg"
    },
    {
      "name": "Gustafsson Hb",
      "url": "./commercials/sv-SE/fine-art/gustafsson-hb/16749269967460/commercial.mp3",
      "artist": "Fine Art",
      "cover_art_url": "assets/img/krang/krang-radio-073.jpg"
    },
    {
      "name": "Andersson Larsson",
      "url": "./commercials/sv-SE/gambling-casinos/andersson-larsson/16749285259760/commercial.mp3",
      "artist": "Gambling Casinos",
      "cover_art_url": "assets/img/krang/krang-radio-003.jpg"
    },
    {
      "name": "Nilsson Svensson",
      "url": "./commercials/sv-SE/mechanical-or-industrial-engineering/nilsson-svensson/16749287431860/commercial.mp3",
      "artist": "Mechanical Or Industrial Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Gustafsson Hb",
      "url": "./commercials/sv-SE/museums-and-institutions/gustafsson-hb/16749264757860/commercial.mp3",
      "artist": "Museums And Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-048.jpg"
    },
    {
      "name": "Larsson Eriksson Kommanditbolag",
      "url": "./commercials/sv-SE/investment-management/larsson-eriksson-kommanditbolag/16749266551800/commercial.mp3",
      "artist": "Investment Management",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Andersson Karlsson Investment",
      "url": "./commercials/sv-SE/facilities-services/andersson-karlsson-investment/16749274285400/commercial.mp3",
      "artist": "Facilities Services",
      "cover_art_url": "assets/img/krang/krang-radio-053.jpg"
    },
    {
      "name": "Johansson Group",
      "url": "./commercials/sv-SE/retail/johansson-group/16749285778440/commercial.mp3",
      "artist": "Retail",
      "cover_art_url": "assets/img/krang/krang-radio-068.jpg"
    },
    {
      "name": "Slund Persson",
      "url": "./commercials/sv-SE/entertainment/slund-persson/16749287169510/commercial.mp3",
      "artist": "Entertainment",
      "cover_art_url": "assets/img/krang/krang-radio-087.jpg"
    },
    {
      "name": "Larsson Andersson",
      "url": "./commercials/sv-SE/facilities-services/larsson-andersson/16749271429280/commercial.mp3",
      "artist": "Facilities Services",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "Andersson Eriksson",
      "url": "./commercials/sv-SE/restaurants/andersson-eriksson/16749279411090/commercial.mp3",
      "artist": "Restaurants",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Stlund Andersson",
      "url": "./commercials/sv-SE/events-services/stlund-andersson/16749283419520/commercial.mp3",
      "artist": "Events Services",
      "cover_art_url": "assets/img/krang/krang-radio-024.jpg"
    },
    {
      "name": "Eriksson Kommanditbolag",
      "url": "./commercials/sv-SE/gambling-casinos/eriksson-kommanditbolag/16749280483340/commercial.mp3",
      "artist": "Gambling Casinos",
      "cover_art_url": "assets/img/krang/krang-radio-069.jpg"
    },
    {
      "name": "Slund Slund",
      "url": "./commercials/sv-SE/retail/slund-slund/16749283967020/commercial.mp3",
      "artist": "Retail",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Larsson Gruppen",
      "url": "./commercials/sv-SE/libraries/larsson-gruppen/16749280909460/commercial.mp3",
      "artist": "Libraries",
      "cover_art_url": "assets/img/krang/krang-radio-061.jpg"
    },
    {
      "name": "Innovation And Advertising",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-innovation-and-advertising-come-together.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Future Of Advertising",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-the-future-of-advertising-is-now.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Power Of AI",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-the-power-of-ai-technology-meets-the-world-of-advertising.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "AI Technology Leads",
      "url": "./commercials/jingles/you-re-listening-to-krangs-radio--where-ai-technology-leads-the-way-in-advertisemen.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "AI Meets Advertising",
      "url": "./commercials/jingles/you-re-listening-to-krangs-radio--where-ai-technology-meets-advertising-excellence.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    }
  ]
});

