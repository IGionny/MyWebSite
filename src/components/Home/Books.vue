<template>
  <h4 class="pt-5 pb-1 text-orange-1" id="section-books">
    <font-awesome-icon icon="fa-solid fa-book" class="mr-1"/>
    Books
  </h4>

  <p>
    Here are some Tech books that I've read and I suggest to you:
  </p>

  <div class="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-5 my-4 justify-between ">
    <a v-for="book in techBooks" :key="book.title" :href="book.url" :title="book.title"
       class="hover:transform hover:skew-y-6">
      <img :src="book.img" :alt="book.title" loading="lazy" class="max-h-[250px] max-w-[190px]"/>
    </a>
  </div>

  <p class="pt-5">
    Here are some NON-tech books that I've enjoyed:
  </p>

  <div class="grid grid-cols-2 lg:grid-cols-4  gap-2 lg:gap-5 my-4 justify-between ">
    <a v-for="book in readBooks" :key="book.title" :href="book.url" :title="book.title"
       class="hover:transform hover:skew-y-6">
      <img :src="book.img" :alt="book.title" loading="lazy" class="max-h-[250px] max-w-[190px]"/>
    </a>
  </div>


</template>
<script setup lang="ts">

interface IBookInfo {
  title: string;
  url: string;
  img: string;
  preferred: boolean;
}

const techBooks: IBookInfo[] = [{
  title: "Designing Distributed Systems",
  url: "https://www.oreilly.com/library/view/designing-distributed-systems/9781491983638/",
  img: "https://learning.oreilly.com/library/cover/9781491983638/250w/",
  preferred: true
}, {
  title: "The Art of Unit Testing",
  url: "https://www.manning.com/books/the-art-of-unit-testing",
  img: "https://images.manning.com/264/352/resize/book/4/d03ac2e-3009-46cf-9e4c-603819414675/osherove.png",
  preferred: true
},
  {
    title: "Atomic Habits",
    url: "https://jamesclear.com/atomic-habits",
    img: "https://jamesclear.com/wp-content/uploads/2024/06/atomic-habits-dots.png",
    preferred: true

  },
  {
    title: "C# in Depth, Fourth Edition",
    url: "https://www.manning.com/books/c-sharp-in-depth-fourth-edition",
    img: "https://images.manning.com/264/352/resize/book/9/319e4bc-7503-43cd-a4a2-f53fa410ebc0/Skeet-4ED-HI.png",
    preferred: true
  },
  {
    title: "Pro .NET Memory Management",
    url: "https://link.springer.com/book/10.1007/978-1-4842-4027-4",
    img: "https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4842-4027-4",
    preferred: true
  },
  {
    title: "Gangs of Four (GoF) Design Patterns",
    url: "https://www.digitalocean.com/community/tutorials/gangs-of-four-gof-design-patterns",
    img: "https://journaldev.nyc3.cdn.digitaloceanspaces.com/2019/08/gangs-of-four-design-patterns-book.png",
    preferred: true
  },
  {
    title: "Patterns of Enterprise Application Architecture",
    url: "https://martinfowler.com/books/eaa.html",
    img: "https://martinfowler.com/books/eaa.jpg",
    preferred: true
  },
  {
    title: "Agile Principles, Patterns, And Practices In C#",
    url: "https://www.oreilly.com/library/view/agile-principles-patterns/0131857258/",
    img: "https://learning.oreilly.com/library/cover/0131857258/250w/",
    preferred: true
  },
  {
    title: "Programming TypeScript: Making Your JavaScript Applications Scale (English Edition)",
    url: "https://www.amazon.it/gp/product/B07R86FL4K/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
    img: "https://m.media-amazon.com/images/I/914Lo09RDcL._SY466_.jpg",
    preferred: true
  },
  {
    title: "NHibernate in Action",
    url: "https://www.manning.com/books/nhibernate-in-action",
    img: "https://images.manning.com/264/352/resize/book/c/f14d7b6-bf2b-4808-9805-fd31d9c600c5/kuate.png",
    preferred: true
  }, {
    title: "Head First Design Patterns",
    url: "https://www.oreilly.com/library/view/head-first-design/0596007124/",
    img: "https://learning.oreilly.com/library/cover/0596007124/250w/",
    preferred: true
  }, {
    title: "User Experience Research",
    url: "https://www.flacoedizioni.com/114-User-Experience-Research.html",
    img: "https://www.lafeltrinelli.it/images/9791280413253_0_536_0_75.jpg",
    preferred: true
  }, {
    title: "Extreme Contracts",
    url: "https://leanpub.com/extremecontracts-italia",
    img: "https://d2sofvawe08yqg.cloudfront.net/extremecontracts-italia/s_hero?1620364531",
    preferred: true
  }];


const readBooks: IBookInfo[] = [
  {
    title: "L'eredità di Charlie",
    url: "https://www.amazon.it/gp/product/B0D1G3X42M",
    img: "https://m.media-amazon.com/images/I/71-N-cSPQIL._SL1500_.jpg",
    preferred: true
  }, {
    title: "Una sera tra amici a Jinbōchō (libreria Morisaki Vol. 2)",
    url: "https://www.amazon.it/gp/product/B0C24B1FPY/ref=ppx_yo_dt_b_search_asin_image?ie=UTF8&psc=1",
    img: "https://m.media-amazon.com/images/I/91xjH+odyeL._SY466_.jpg",
    preferred: true
  }, {
    title: "I miei giorni alla libreria Morisaki",
    url: "https://www.amazon.it/gp/product/B09X78TF9H/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
    img: "https://m.media-amazon.com/images/I/91CgATVJL-L._SY466_.jpg",
    preferred: true
  }, {
    title: "Tutto è qui per te",
    url: "https://www.amazon.it/gp/product/B0CLY94M54/ref=ppx_yo_dt_b_search_asin_image?ie=UTF8&psc=1",
    img: "https://m.media-amazon.com/images/I/81SvI55sjKL._SY466_.jpg",
    preferred: true
  }, {
    title: "Moon Lake",
    url: "https://www.amazon.it/gp/product/B09RPFWHW6/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
    img: "https://m.media-amazon.com/images/I/81pYk15HU3L._SY466_.jpg",
    preferred: true
  }, {
    title: "Elefante a sorpresa: Un'indagine di Hap & Leonard (Ciclo Hap & Leonard Vol. 14)",
    url: "https://www.amazon.it/gp/product/B081SDQ5ZX/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
    img: "https://m.media-amazon.com/images/I/81HYSWAU5hL._SY466_.jpg",
    preferred: true
  }, {
    title: "Una banda di idioti",
    url: "https://www.amazon.it/Una-banda-idioti-John-Toole/dp/8892940228/ref=sr_1_fkmr0_1?__mk_it_IT=ÅMÅŽÕÑ&crid=1XX2K15XU57OS&dib=eyJ2IjoiMSJ9.qHl5O2EVk9rgRaRP2MRNSkeXayfn8J_RILsLdOs2Jh_JIm7sFgrsFQYchLoY-BtJfEMkV_iEE0Fu-QIHAzo7zr8YZQ8qZLnSHQCtEu54mg3cDG4YQsVZbbzbJaYgWDR5.xFv-cpJdRayM47-tD9fObni1rtSQI24gh_ad2Coj168&dib_tag=se&keywords=una+banda+di+idi&qid=1730547932&sprefix=una+banda+di+idi%2Caps%2C131&sr=8-1-fkmr0",
    img: "https://m.media-amazon.com/images/I/61Yt4kW+cPS._SY466_.jpg",
    preferred: true
  }, {
    title: "Su la testa (Urania)",
    url: "https://www.amazon.it/gp/product/B0825GZ48C/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
    img: "https://m.media-amazon.com/images/I/81oBM9dUBAL._SY466_.jpg",
    preferred: true
  }, {
    title: "Chiusi dentro (Urania)",
    url: "https://www.amazon.it/gp/product/B01HE4QZMG/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
    img: "https://m.media-amazon.com/images/I/81LRZ5FCVKL._SY466_.jpg",
    preferred: true
  }, {
    title: "Doctor Sleep",
    url: "https://www.amazon.it/gp/product/B00UKK425O/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
    img: "https://m.media-amazon.com/images/I/817oC9agCwL._SY466_.jpg",
    preferred: true
  }, {
    title: "Punisher. Bentornato, Frank (Punisher Collection)",
    url: "https://www.amazon.it/gp/product/B078142K3V/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
    img: "https://m.media-amazon.com/images/I/91Yn2t21RmL._SY466_.jpg",
    preferred: true
  }];

</script>