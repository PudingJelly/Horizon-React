import React from "react";
import "../scss/context.scss";

const PlanetContext = () => {
  return (
    <>
      <div className='planet-content-box'>
        <div className='content'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta
          egestas elit vel ornare. Quisque nec arcu nisi. Aliquam erat volutpat.
          Cras consectetur ligula sit amet lectus porta, sit amet convallis orci
          condimentum. Vestibulum sed interdum nisi, ac pharetra arcu. Duis
          tristique metus a metus laoreet pulvinar. Cras suscipit ipsum nunc,
          sit amet imperdiet eros sodales at. Suspendisse quis urna mollis,
          tincidunt turpis id, efficitur mi. Sed non turpis vel arcu congue
          pharetra. Aliquam ante ligula, efficitur nec tincidunt ac, rhoncus
          eget nisi. Donec sollicitudin dignissim est, fermentum pulvinar tortor
          fringilla a. Aliquam non nibh egestas, pretium orci at, iaculis nulla.
          Maecenas nulla ex, consequat in porttitor a, pharetra et justo. Nullam
          ultricies neque a ornare cursus. Curabitur porttitor nisl sit amet
          eros luctus, eget molestie tortor porttitor. Nam feugiat lacinia nunc,
          quis tincidunt tellus fringilla suscipit. Nam vel aliquam ex, vitae
          commodo augue. Vestibulum commodo placerat vestibulum. Maecenas
          accumsan convallis turpis, et scelerisque sem tempus in. Curabitur
          mattis feugiat suscipit. Sed a tortor ullamcorper massa ullamcorper
          venenatis a eget leo. Cras dictum dui vel cursus maximus. Proin
          euismod porttitor erat eu porttitor. Aliquam vestibulum arcu ut tortor
          ultricies, nec viverra justo dignissim. Donec quis rutrum nunc, ornare
          auctor turpis. Aliquam mollis massa et risus convallis, at imperdiet
          elit congue. Ut eu velit vel ante vestibulum rhoncus. Nam ac eros ac
          risus tristique congue. Sed tempus lobortis sagittis. Aliquam vitae
          ipsum sed dolor scelerisque varius sed ac metus. Proin accumsan quis
          est ut feugiat. Aenean rhoncus dolor vitae turpis pretium molestie.
          Donec quis lorem nec turpis hendrerit blandit. Nam mollis tincidunt
          sagittis. Sed pulvinar justo lacinia neque tempus, ut rutrum tortor
          pulvinar. Donec lacus enim, accumsan eget faucibus sed, luctus eget
          justo. Proin sit amet metus massa. Nunc euismod imperdiet laoreet.
          Nunc euismod, augue vel fermentum venenatis, justo quam pulvinar eros,
          non feugiat mauris enim nec lacus. Donec nulla felis, tempor sit amet
          ligula sagittis, blandit feugiat nisi. Sed consequat nisi nunc, nec
          gravida est aliquam ut. Nulla vitae est nec elit sagittis efficitur.
          Aliquam interdum eros sit amet vestibulum pellentesque. Praesent
          mollis orci vitae ex posuere, sed volutpat elit convallis. Aliquam
          consectetur eros lacus, vitae lobortis magna vulputate sed. Mauris sit
          amet finibus nisl, et placerat neque. Phasellus ut mattis arcu. Donec
          nulla ligula, condimentum eget tellus non, faucibus aliquam nisi.
          Donec rutrum accumsan sagittis. Pellentesque nisl erat, tempor eget
          tincidunt in, suscipit at mauris. Vestibulum fermentum, erat nec
          ullamcorper mollis, orci erat vulputate lorem, et egestas libero enim
          sit amet mi. Nullam orci magna, aliquet interdum tincidunt sed, auctor
          quis tortor. In pharetra venenatis dolor, et finibus turpis pulvinar
          vel.
        </div>
      </div>

      <div className='left-planet-content-box'>
        <div className='left-content'>
          <div className='planet-name-box'>
            <div className='title-k'>천체명</div>
            <div className='title-e'>Planet Name</div>
          </div>

          <div className='planet-information'>
            <div className='planet-info diameter'>지름: (km)</div>
            <div className='planet-info surface-area'>표면적: (10⁶ km²)</div>
            <div className='planet-info mass'>질량: (10²⁰ kg)</div>
            <div className='planet-info rotation'>자전주기: (일)</div>
            <div className='planet-info revolution'>공전주기: (일)</div>
            <div className='planet-info revolution'>~~~형 행성</div>
            <div className='planet-info orbital-radius'>궤도 반지름: (AU)</div>
            <div className='planet-info main-satellite'>대표위성: </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanetContext;
