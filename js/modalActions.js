$(document).ready(function(){

  $('.pop-up-button').click(function(e){
    e.preventDefault();
    var modalData = modalSections[$(this).attr('data-name')];
    modifySlider(modalData.title, modalData.description, modalData.images);
    showSlider();
  });

  $('.close-btn').click(function(e){
    $('#hide-screen').animate({opacity: 0}, 200, function(){
      $(this).css({'z-index': '0'});
      unSlick();
    });
  });

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
      description:'The courtyard boasts a cistern made of brick and clay, which Belmont originally used to gather water for his horses. The team is currently working on a system to collect runoff rainwater from the roof and naturally water the lawn. The grounds also feature the courtyard gates and balustrade that were salvaged from a demolished house called “Whiteholme."',
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
        'FIRSTFLOORLIBRARY/IMG_0088.JPG',
        'FIRSTFLOORLIBRARY/711A8924.JPG',
        'FIRSTFLOORLIBRARY/IMG_3265.JPG'
      ]
    },
    theVaultedRoom: {
      title: 'The Vaulted Room',
      description:'At a staggering 11,000 square feet, the Vaulted Room took a whole month to be cleaned by a team of five men—and, after being rid of buckets of dust, it had to be washed and sanded twice. It will take 40 gallons of primer and 40 gallons of paint to refresh the walls and the ceiling. Anything below the cornice will need to be hand-rolled and brushed. ',
      images:[
        'THEVAULTEDROOM/DSC00612.JPG',
        'THEVAULTEDROOM/IMG_0030.JPG',
        'THEVAULTEDROOM/MRK36385.JPG',
      ]
    },
    alvasRoom: {
      title: 'Alva\'s Bedroom',
      description:'This intricately detailed bedroom suffered severe water damage due to an upstairs retention tank that had been leaking for years. The plasterwork was almost beyond repair, as it was never caulked to begin with. The job took over 600 hours to complete, using unique methods like filling a pastry bag with plaster to meticulously caulk around fixtures and decorations.',
      images:[
        'ALVASBEDROOM/Alva.restore.jpg',
        'ALVASBEDROOM/711A8978.JPG',
        'ALVASBEDROOM/IMG_3217.JPG',
        'ALVASBEDROOM/MRK32484.JPG']
    },
    chandelier: {
      title: 'Chandeliers',
      description:'Each piece of every chandelier had to be documented, completely disassembled and photographed. The largest chandelier had an estimated 20,000+ individual pieces, not including all the pins and screws. A single chandelier weighed in at 460 pounds, and was held up by nothing more than a single iron nail, to which the team later added an independent safety cable.',
      images:[
        'CHANDELIERS/Belcourtassemble204.JPG',
        'CHANDELIERS/IMG_0056.JPG',
        'CHANDELIERS/IMG_0068.JPG'
      ]
    }
  };
});
