$(document).ready(function(){
  $('.white-bg').click(function(){
    hideScreen();
  });

  $('.pop-up-button').click(function(e){
    e.preventDefault();
    var modalData = modalSections[$(this).attr('data-name')];
    modifySlider(modalData.title, modalData.description, modalData.images);
    showSlider();
  });

  $('.close-btn').click(function(e){
    hideScreen();
  });

  function hideScreen(){
    $('#hide-screen').animate({opacity: 0}, 200, function(){
      $(this).css({'z-index': '0'});
      unSlick();
    });
  }

  function unSlick(){
    $('.slider').slick("unslick");
  }

  function modifySlider(header, body, images){
    $('#slider-header').html(header);
    $('#slider-text').html(body);
    $('#main-slider').html('');
    for(x = 0; x < images.length; x++){
      $('#main-slider').append('<div class="image-content"><img src="images/'+ images[x] +'"></div>');
    }
  }

  function showSlider(){
    //Must call the slider each time as we are dynamically adding images to the slider so it must re-render itself
    $('.slider').slick({
      dots: true,
      infinite: true,
      autoplaySpeed: 4000,
      speed: 300,
      autoplay: true,
      prevArrow: false,
      nextArrow: false
    });

    $('#hide-screen').css({'z-index': '200'}).animate({opacity: 1}, 300);
  }

  //This object is used to setup the different modal sections dynamically.
  //Adjust the title, description, or image array as you see fit. Don't touch the structure.
  var modalSections = {
    exteriorConstr: {
      title: 'Exterior',
      description:'The courtyard boasts a cistern of brick and clay, which Belmont used to gather water for his horses. The team is currently working on a system to collect rainwater from the roof. The grounds also feature the courtyard gates and balustrade salvaged from a demolished house called “Whiteholme."',
      images:[
        'EXTERIOR/Belcourt 52.jpg',
        'EXTERIOR/CORV3771.JPG',
        'EXTERIOR/711A8994.JPG']
    },
    firstFlootLibrary: {
      title: 'First Floor Library',
      description:'From the swirling ceilings to the dark wood floors, the Library has undergone a complete restoration. A hill in the hardwood from years of poor drainage led to repeated water intrusion through the French doors causing the floor to buckle over time.',
      images:[
        'FIRSTFLOORLIBRARY/034Library11.20.13.jpg',
        'FIRSTFLOORLIBRARY/711A8924.JPG',
        'FIRSTFLOORLIBRARY/IMG_3265.JPG'
      ]
    },
    theVaultedRoom: {
      title: 'The Vaulted Room',
      description:'At a staggering 11,000 square feet, the Vaulted Room took a whole month to clean by a team of five—and, after being rid of buckets of dust, it had to be washed and sanded twice. It will take 40 gallons of primer and 40 gallons of paint to completely refresh the walls and ceiling. ',
      images:[
        'THEVAULTEDROOM/DSC00612.JPG',
        'THEVAULTEDROOM/IMG_0030.JPG',
        'THEVAULTEDROOM/MRK36385.JPG',
      ]
    },
    alvasRoom: {
      title: 'Alva\'s Bedroom',
      description:'This intricately detailed bedroom suffered severe damage due to an upstairs retention tank leaking for years. The plasterwork was almost beyond repair, as it was never caulked previously. The job took over 600 hours to complete, using unique methods to meticulously caulk all fixtures and decorations.',
      images:[
        'ALVASBEDROOM/Alva.restore.jpg',
        'ALVASBEDROOM/711A8978.JPG',
        'ALVASBEDROOM/MRK32484.JPG']
    },
    chandelier: {
      title: 'Chandeliers',
      description:'Every chandelier had to be disassembled, documented and photographed. The largest chandelier had an estimated 20,000 pieces, not including the pins or screws. One chandelier weighed 460 pounds and was held up by a single nail. The team later added an independent safety cable.',
      images:[
        'CHANDELIERS/Belcourtassemble204.JPG',
        'CHANDELIERS/IMG_0056.JPG',
        'CHANDELIERS/IMG_0068.JPG',
        'CHANDELIERS/33873c6e-5e8b-11e6-8493-70b31dcf67df.jpg'
      ]
    }
  };
});
