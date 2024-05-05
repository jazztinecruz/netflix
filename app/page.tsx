import get from "@/core/libraries/get";
import { Page } from "@/core/types/react";

const Home: Page = async () => {
  const movies = await get.movies.popular();
  const upcoming = await get.movies.upcoming();
  const discover = await get.movies.discover();
  const similar = await get.movies.similar({ id: "823464" });
  const credits = await get.movies.credits({ id: "823464" });

  const movie = await get.movie.details({ id: "823464" });
  const video = await get.movie.video({ id: "823464" });
  const images = await get.movie.images({ id: "823464" });
  const certificate = await get.movie.certificate({ id: "823464" });

  if (
    !movie ||
    !movies ||
    !upcoming ||
    !similar ||
    !credits ||
    !movie ||
    !video ||
    !images ||
    !certificate ||
    !discover
  )
    return <div>Engg!!!</div>;

  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, hic!
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus tenetur
      vel placeat, blanditiis tempora necessitatibus, voluptatibus enim culpa,
      et inventore quo consequuntur ullam commodi libero cumque. Dicta quaerat
      vero veniam quod sint nostrum perferendis, quis at nemo fugit, illo
      inventore? Fugit alias exercitationem cumque nam laudantium ratione eos
      aperiam perspiciatis, expedita velit. Deserunt voluptatem sunt
      necessitatibus voluptatum inventore ducimus quaerat delectus provident
      rerum nemo ipsum illo laudantium eligendi dicta iste cupiditate asperiores
      quisquam, minima optio officiis molestias porro aliquam. Atque quisquam,
      itaque delectus beatae dolore voluptas in! Quia quidem vitae perspiciatis
      error voluptates ipsum fugiat iste commodi incidunt perferendis molestiae
      aliquam qui, minus iusto quisquam, ipsam quibusdam ratione voluptate natus
      libero reprehenderit magni officiis culpa assumenda. Delectus ad nulla a.
      Nulla quaerat quas labore at tempore cum, alias iste fuga doloribus
      repudiandae vitae vero, atque mollitia modi dignissimos dolorum molestias
      vel? Consectetur facere animi ea tenetur repellat, voluptatem similique
      obcaecati neque cumque iste, voluptas delectus atque veritatis saepe fuga
      vero placeat eum nisi blanditiis, odit itaque nesciunt ab incidunt? Amet
      modi quidem qui, fuga numquam praesentium voluptas ad tempora maiores
      excepturi, a quis laborum. Vitae quibusdam deserunt atque porro, iusto
      perferendis facere aut enim esse voluptatibus nobis modi aspernatur
      reiciendis consequatur temporibus animi quos obcaecati eius totam
      molestias labore magni omnis ullam natus. Vero eius itaque nisi
      repudiandae quod enim, iusto explicabo nostrum possimus! Ad ipsam
      consequatur earum hic, dolorum optio similique alias, eligendi unde
      asperiores dolorem veniam doloribus id porro expedita iure inventore sunt
      repellendus non. Numquam nulla praesentium unde quos consequatur mollitia
      accusamus quis iusto perspiciatis saepe dolorem enim dicta atque porro
      autem, soluta in rerum minima nostrum odit nisi ducimus nemo quasi
      corporis. Cumque optio rem quidem sint quaerat, dolorum fugit unde? Non
      deserunt a, aut deleniti itaque expedita quis beatae, nulla inventore
      distinctio laudantium modi esse placeat ab molestiae consequatur eius
      nesciunt porro. Sapiente culpa a quisquam, nesciunt quasi officia vitae
      hic nihil neque dolores aperiam labore, asperiores aliquam aliquid rerum
      tempora magnam minus. Amet accusamus praesentium neque possimus magni
      atque reiciendis, vel voluptatum rerum laborum explicabo ipsam iusto aut
      enim nemo ullam dicta a consequatur beatae quas eligendi asperiores
      voluptates! Quidem, quo illo odit fugiat laborum deleniti sunt dicta
      placeat magni sequi! Reiciendis porro a sed eaque voluptatum accusamus
      eius dicta, fuga fugiat quas voluptate nobis amet distinctio architecto
      asperiores aliquid soluta, sequi praesentium iure vero maxime. Aperiam
      dolor eum maxime eligendi necessitatibus repudiandae, distinctio dolorem,
      pariatur eos tempore nesciunt asperiores blanditiis, itaque harum corporis
      animi corrupti. Laboriosam provident molestiae ducimus sequi eaque autem
      rerum modi quas voluptatibus, commodi, dignissimos recusandae cumque
      corrupti blanditiis praesentium excepturi sunt? Quasi, ex incidunt.
      Accusamus autem repudiandae repellendus culpa incidunt facilis quia
      temporibus fugiat, quidem voluptatem dolorem hic sint consequatur sequi
      ratione beatae similique aliquam quaerat consectetur praesentium iste
      delectus, earum laborum omnis! Harum mollitia impedit praesentium, qui
      minus enim similique necessitatibus corrupti voluptatum deserunt est
      fugiat delectus recusandae facilis maxime. Sapiente consequuntur aut
      itaque vero sit. Rem ut dolores, labore saepe itaque et quam aut culpa ad
      a, magnam nisi porro, doloribus facere provident tempore nihil rerum
      voluptates impedit quisquam voluptate. Beatae alias ipsum consectetur qui
      nihil vel recusandae magni excepturi rerum quis natus vero, id fugit eaque
      libero esse doloribus quasi dolores praesentium inventore ullam aliquam
      mollitia porro tenetur. Molestiae facere similique voluptas, sequi harum
      nihil repellat quas iure corporis repellendus eum perspiciatis dolore
      magnam eligendi saepe officiis ab cumque! Magnam tenetur veniam ratione
      officia aliquid facere doloremque blanditiis eum! Voluptas dignissimos
      labore quidem repellat voluptatum pariatur sequi exercitationem
      reprehenderit, earum veniam dicta quo molestias provident harum? Est sed
      minus id maiores ratione mollitia dolores saepe voluptas adipisci
      exercitationem, eius tempora tenetur non, quidem hic maxime quo blanditiis
      pariatur necessitatibus minima natus. Laboriosam eaque soluta accusamus
      molestiae ipsam quam ipsum nisi quae, nostrum debitis, voluptas voluptate
      tempore harum sed explicabo beatae. Illum quas cupiditate amet modi
      corrupti voluptate accusamus obcaecati mollitia maiores consequatur?
      Distinctio in magnam inventore tenetur, rerum perspiciatis amet rem!
      Voluptate dicta non quaerat quidem natus similique placeat sed ea aperiam
      voluptas! Nihil molestias illum enim quasi ipsa inventore eligendi libero
      dignissimos iusto dicta nemo doloribus reiciendis adipisci praesentium
      voluptate minus, illo consequatur earum? Ducimus harum obcaecati optio
      veritatis, illum suscipit veniam accusamus animi libero mollitia quia,
      vero necessitatibus, voluptatibus vitae voluptatem nobis velit? Atque in,
      beatae fugiat eius officia quaerat, quidem sapiente numquam assumenda
      dolore excepturi! Magnam, vero dolore quidem odit explicabo est possimus
      similique quaerat harum quod obcaecati a maiores asperiores aut doloribus
      quis! Veritatis soluta minima iste odio commodi nobis, ut reiciendis
      aperiam pariatur fugit recusandae provident eligendi, animi, quidem vero
      quaerat reprehenderit! Eos quos delectus obcaecati, architecto officiis
      aperiam numquam sit. Fuga ullam expedita ex culpa quas, ut incidunt
      officiis nobis laborum? Repellat asperiores dolores, ad dolorum,
      consequuntur praesentium sed quos accusantium temporibus doloremque quia
      nam. Eum, provident esse reiciendis consectetur ab est optio architecto
      eius dolorem magni. Quisquam ullam nobis voluptate beatae animi velit nisi
      illo quam blanditiis odio perferendis, eveniet asperiores. Ratione enim
      quidem omnis aperiam accusantium incidunt totam natus. Praesentium dolorum
      enim eum delectus natus ratione impedit odit aliquid officiis quisquam
      modi, tempora eos ex laboriosam odio animi blanditiis. Voluptatem,
      similique officiis ipsum quisquam odit quae accusantium architecto!
      Perferendis voluptas ad hic iste consequuntur corrupti rerum non
      repellendus sapiente tenetur! Consequuntur explicabo repudiandae veniam
      praesentium molestias debitis voluptate quos, cumque totam commodi dolores
      dolore, vel quo enim officiis obcaecati, ipsa esse quisquam ipsam quod ut!
      Repudiandae autem vitae quidem temporibus a cum. Possimus officiis
      doloremque molestiae voluptatibus earum fuga animi excepturi reiciendis
      temporibus, nobis eveniet ipsum, distinctio sit! Expedita praesentium
      saepe itaque blanditiis ut totam beatae quasi at officiis? Quasi aut odit,
      fuga quod distinctio eligendi dignissimos dolorum ducimus unde rerum
      perspiciatis, nulla labore. Corrupti incidunt sapiente ratione dolore
      enim, laudantium cum nam voluptate. Ratione, velit. Officia placeat
      numquam nulla ducimus aspernatur sapiente, temporibus deserunt eius harum
      eveniet debitis ipsum excepturi ex facilis maxime. Iure, quo. Aperiam quam
      rerum dignissimos molestias sed nulla, obcaecati dicta, porro enim velit
      laboriosam dolore ipsum dolores fugiat at saepe distinctio exercitationem,
      quo soluta temporibus non. Reiciendis ipsum praesentium asperiores
      quibusdam voluptatibus, tempore eligendi id ipsa, explicabo velit porro
      ipsam sed, illum molestias temporibus. Saepe laboriosam labore, nostrum
      aliquam voluptates distinctio amet fugit nihil! Aliquid dolorum vel error.
      Incidunt sequi nam qui soluta sapiente consequuntur porro necessitatibus
      magnam cum neque consectetur aspernatur, cumque, quis repellendus laborum
      asperiores dicta totam magni a minima labore sed? Libero earum incidunt
      quisquam amet maxime ipsam, est placeat iusto ratione id. Quidem rem
      perferendis deserunt voluptate iusto sed sint ex debitis maxime
      repudiandae nihil eum corrupti blanditiis sapiente repellat, vel,
      provident voluptatum. Ad sequi et quasi magnam, quod modi beatae unde
      tenetur voluptas iure sapiente dolor! Suscipit quidem modi sed inventore
      ad laboriosam aperiam harum, dignissimos odio voluptate assumenda officiis
      autem, hic odit nulla maxime iste corrupti consequuntur magni quo sint
      facilis facere! Nam tempora repellendus quam voluptates porro blanditiis
      laboriosam voluptatem deserunt ea dignissimos incidunt voluptas cum, dolor
      labore officia alias dolorum modi fugit doloremque sapiente aliquam! Ipsam
      in alias repellat voluptatibus sunt cupiditate fugiat cum nisi laborum
      asperiores, quos doloribus reprehenderit distinctio! Et repudiandae
      placeat debitis dolorem tempora fugiat cum quod, fuga laudantium numquam
      perferendis rem, consequatur, vel reprehenderit repellat perspiciatis
      officia reiciendis. Deserunt suscipit odit eius quaerat hic magni,
      repellat ipsa ratione totam aliquid pariatur itaque explicabo. Dignissimos
      ducimus, expedita exercitationem officia, nihil unde dolorum reiciendis
      non, eaque optio nisi quas praesentium repellendus! Quos impedit commodi
      in autem rerum a, ducimus blanditiis! Soluta, deserunt assumenda maiores
      nostrum voluptatum consequatur, unde repellendus minus similique impedit
      reprehenderit? Eligendi harum voluptatum quisquam eius expedita in, non,
      ex minus animi tempore ipsa molestiae minima deserunt esse eveniet, quidem
      impedit assumenda aliquid? Nihil adipisci maiores sequi consectetur
      incidunt itaque laboriosam inventore explicabo ea, repellendus quia nemo
      quae. Quo repellendus est unde ipsum autem totam quod blanditiis aperiam
      excepturi ducimus sapiente consectetur quasi voluptate, natus,
      perspiciatis necessitatibus dignissimos. Vero, placeat ex voluptatibus,
      animi officia ratione, dolorem laudantium molestias quas eius praesentium
      provident inventore. Suscipit voluptatum officia ab repellendus eos ipsum,
      architecto ipsam harum tempora asperiores sunt perferendis facilis
      obcaecati? Labore tempore, cum tempora ut sequi amet dignissimos ipsum
      molestiae voluptatibus possimus inventore sunt recusandae laboriosam
      aliquam nihil debitis quaerat omnis repellat iste accusantium quas
      corporis atque ex. Magnam, provident iure alias consequuntur voluptas
      pariatur aliquid amet, a vero atque ullam vitae distinctio porro minus non
      dolore id quas harum deserunt asperiores quibusdam libero? Eius laborum
      ratione veniam libero quos dicta soluta sint! Rem libero ab fuga voluptate
      error corrupti, officiis magnam. Incidunt nam sed nesciunt sint commodi
      hic in at ducimus nisi recusandae, nulla iure perspiciatis culpa! Eos,
      fuga deleniti! Possimus totam soluta ad eaque beatae qui natus repellat
      enim ullam? Architecto cum ullam placeat ducimus earum vitae veritatis
      beatae aliquam cupiditate doloremque et ab magnam inventore quasi, quod
      animi. Consequatur corporis iusto, ipsa asperiores qui dolore illum eaque,
      velit esse nulla odit itaque harum. Doloribus placeat dignissimos incidunt
      libero consequatur quam exercitationem voluptates vitae, cum, iusto
      commodi maiores. Veritatis pariatur quasi temporibus autem aperiam
      corrupti dolores commodi, amet ut minima. Adipisci omnis quas dolore
      explicabo ad ipsam alias! Quas aspernatur ipsa quisquam blanditiis ex.
      Quibusdam corporis sunt similique distinctio impedit nostrum, facilis
      voluptatem at, non sapiente mollitia nesciunt deserunt. Nisi asperiores
      odit magnam tempora possimus adipisci eligendi. Esse autem perspiciatis
      cum ullam excepturi sequi, necessitatibus omnis illo nulla praesentium
      labore asperiores! Sint voluptates at molestiae, commodi dignissimos
      officia. Explicabo, eligendi doloribus molestias nulla fugit commodi,
      earum quaerat recusandae dolorum quia veritatis. Doloremque soluta sit
      eius, dolorem alias quaerat fugit? Veniam suscipit temporibus aliquid
      nulla sunt tempora enim asperiores incidunt labore aspernatur. Recusandae,
      delectus. Id repudiandae excepturi deserunt voluptate amet nostrum illo,
      exercitationem cum magnam dolores ipsum quos ullam cupiditate molestiae
      delectus labore nobis, quod alias molestias neque? Assumenda incidunt iure
      explicabo enim, natus possimus, dolorem sint accusamus debitis sit
      blanditiis, aut accusantium non ipsam sed. Amet, praesentium facilis
      incidunt quo illum corporis quisquam magnam illo perspiciatis possimus
      iste explicabo ipsum velit aut eligendi nihil nemo aliquam odit quibusdam?
      At et dolore ipsa eligendi laborum temporibus consequatur dolorem
      voluptatibus sequi quam natus excepturi iste id in nemo laboriosam dolor,
      praesentium deserunt cupiditate nobis earum doloribus pariatur. Sed
      cupiditate porro sapiente excepturi esse nulla quam tempore repellendus
      numquam ipsa nisi dolorem ex animi provident facere vel adipisci, aut
      sequi! Impedit temporibus voluptate, ipsum officia adipisci molestiae
      dolorum placeat labore deleniti commodi! Aliquam excepturi culpa
      laboriosam rem in explicabo officiis modi libero saepe quae ullam quam
      error aliquid facilis quod consectetur aperiam doloremque suscipit
      blanditiis cum, neque recusandae unde. Veniam corrupti quod est adipisci?
      Praesentium, rem nam illum laboriosam itaque maxime eligendi dolor,
      corrupti doloribus ea odio. Architecto a commodi amet quasi iste, odio
      velit quos enim exercitationem voluptate nemo quis, eligendi doloribus
      vitae. Iusto ut accusamus consequuntur alias iure vitae rerum
      necessitatibus illo quas, error esse facere atque odit saepe ipsa ad
      minus? Repudiandae porro vero facere magnam impedit esse tempora. Vitae
      est, totam cumque eum voluptas natus deserunt optio rem temporibus id quis
      vero, voluptatibus, voluptatem unde explicabo praesentium. Est sapiente
      officiis exercitationem eaque error culpa assumenda perspiciatis? Fuga
      deserunt dicta vitae accusamus assumenda ipsam nam, minus ab eligendi
      laborum quisquam et cupiditate dolores autem animi eos iure? Molestiae
      porro quisquam, iste ipsum cupiditate error consequatur atque placeat
      explicabo ducimus itaque nam repudiandae libero expedita quas nulla beatae
      fugit? Doloremque unde consectetur nisi ex, qui facere sint placeat itaque
      quisquam aspernatur incidunt tempore eius delectus earum? Consequatur
      molestias dicta doloribus laborum laudantium inventore? Rem autem, neque
      amet quisquam quae soluta sunt accusamus similique beatae quis rerum
      delectus! Vero nostrum voluptatum debitis placeat nulla. Tempora veniam
      quo, amet deleniti obcaecati expedita nobis similique eaque sit fugit
      eligendi aliquam sint, dolores, ipsam saepe illum architecto adipisci nemo
      accusamus! Cupiditate minus esse ipsum sint illo tenetur magnam nulla
      incidunt ipsa. Fugit doloremque incidunt quidem quis non minima totam, a
      eius illo exercitationem amet, itaque laudantium reprehenderit quas
      voluptatibus earum, facilis soluta. Exercitationem sint vel id facilis
      natus ad doloribus inventore. Eveniet impedit reprehenderit veniam numquam
      unde praesentium voluptatibus. Ipsam vero dolores ipsa eum fugiat!
    </div>
  );
};

export default Home;
