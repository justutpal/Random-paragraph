let input = $("input");
let button = $(".button");
let para = $(".para");
let str = " ";
let text = [
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni libero nam ipsam ullam. Blanditiis,reiciendis provident, ex maxime ratione nesciunt reprehenderit non dolorum facilis amet in impedit doloribus cupiditate sint architecto aliquam accusantium quo placeat, ab dolor.",

  "Aperiam esse dolorum eligendi omnis maioresassumenda blanditiis repellendus odit voluptatem quidem, adipisci qui illum dolores consectetur dolore, quaerat quis neque tenetur expedita ut porro sapiente vero? Doloremque rem numquam officia quibusdam eum a et! Assumenda, sint.",

  "Molestiae cumque ratione error voluptatem corrupti laudantium. Accusantium optio consequuntur hic explicabo quasi, quae quaerat ducimus dolore odit modi ad in aut repellendus aperiam earum sequi placeat laudantium aliquid deserunt saepe nostrum. Nesciunt quasi reprehenderit, fugit ullam inventore quam soluta et nihil ipsa, eos impedit at doloreexcepturi illo rerum praesentium.",

  "Reprehenderit rem deleniti cumque veniam deserunt cum veritatis magni, inciduntiure expedita aliquid harum! Quaerat vitae, fuga illum dolorum debitis asperiores modi laborum facilis, ratione ipsaofficiis a molestiae ducimus error consequatur ad placeat quae quas hic delectus dolores obcaecati qui ut.",

  "Aperiam magnam obcaecati fugit quidem, voluptatem ducimus nesciunt! Animi, corrupti? Ab, maiores ipsa. Doloremque aperiamcum harum minima dicta iste, assumenda nisi at non recusandae sint eos dolor nam a error, unde inventore doloribuseaque, iusto cupiditate. Harum quod adipisci distinctio laboriosam error eius voluptas ipsum, neque velit, expeditatotam quasi.",

  "Neque necessitatibus vitae, voluptate, aspernatur praesentium autem facere voluptatibus doloribus quiab dignissimos minima quasi molestias eaque aut dicta veniam corporis quaerat quidem modi id officiis! Illo quodquasi nostrum eaque facilis minima sapiente, totam adipisci a labore odit iste eos culpa quia repellendus, ipsamvoluptas quos, molestias sint. Soluta error nobis animi nulla voluptas suscipit quia tenetur iste perspiciatisfugit.",

  "Optio quos consequuntur aperiam a, aliquid voluptatem doloremque dolorem laboriosam tempore, numquamaccusamus obcaecati, voluptate aut facilis quam! Similique amet ex esse iste harum ut iure quo et ipsam, vitae earumcupiditate perspiciatis. Minima molestiae facere ea voluptate minus nulla, facilis omnis consequuntur debitis eaque officia placeat, quidem quis fugit natus eos perferendis totam, unde soluta dolorum odit possimus saepe.",

  "Optio omnis sapiente voluptates soluta minima unde in dolores explicabo consequuntur incidunt deleniti nobisratione, eius voluptatibus! Dolor, ad iusto ratione maiores minima earum voluptate vero officia sequi laboriosamexcepturi? Temporibus assumenda officiis quae sit quo dolorum, quam neque similique explicabo amet aliquam odioplaceat optio at aut? Est temporibus alias soluta impedit beatae maxime a quos voluptate officiis, totam magniquibusdam odio vel numquam quidem.",

  "At eum et magni iure facilis, ipsa commodi minus blanditiis corrupti iste dignissimos ullam earum, soluta tempore quibusdam nam alias vitae officiis. Numquam, quam.",

  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, adipisci? Eius dicta autem quae laborum voluptas, temporibus rerum consectetur nihil repellendus amet non provident, illo voluptatibus ipsa! Exercitationem, tempora error? ",
];

//  Functions

button.click(() => {
  str = "";
  if (input.val() <= text.length) {
    for (let i = 0; i < input.val(); i++) {
      let random = Math.floor(Math.random() * (text.length - 1));
      str += text[random];
      para.html(Array.from(str));
    }
  } else if (input.val() > text.length || input.val() == null) {
    para.html("Please enter number between 1 to 10");
  }
});












































button.click( () => {

  para.html("")
  if( input.val() >=1 && input.val() <= text.length) {
    for (let i = 0; i < input.val(); i++) {
      let random = Math.floor(Math.random() * text.length);
      let paragraph = "<p>" + text[random] + "</p>";
      para.append(paragraph)   
    }
  }
  else {
    para.html('Please enter a number between 1 and 10')
  }
})
