<template>
  <h4 class="pt-5 pb-1 text-orange-1" id="section-books">
    <font-awesome-icon icon="fa-solid fa-book" class="mr-1"/>
    Books
  </h4>

  <div class="flex gap-5 my-4 ">
    <a v-for="book in books" :key="book.title" :href="book.url" :title="book.title"
    class="hover:transform hover:skew-y-6">
      <img :src="book.img" :alt="book.title" loading="lazy" class="max-h-[250px]"/>
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

const books: IBookInfo[] = [{
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

  }, {
    title: "NHibernate in Action",
    url: "https://www.manning.com/books/nhibernate-in-action",
    img: "https://images.manning.com/264/352/resize/book/c/f14d7b6-bf2b-4808-9805-fd31d9c600c5/kuate.png",
    preferred: true
  }, {
    title: "Head First Design Patterns",
    url: "https://www.oreilly.com/library/view/head-first-design/0596007124/",
    img: "https://learning.oreilly.com/library/cover/0596007124/250w/",
    preferred: true
  }];


</script>