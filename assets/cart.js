loadCatalog().then(d=>{
 const root=document.querySelector('#cart-content');
 function draw(){
  const rows=readDemo(),items=rows.map(r=>({row:r,p:d.products.find(p=>p.id===r.id)})).filter(x=>x.p);
  if(!items.length){root.innerHTML='<p>В корзине пока пусто.</p><a class="j-btn" href="./catalog.html">Перейти в каталог</a>';return}
  root.innerHTML=items.map(({row,p})=>'<div class="j-spec"><span><a href="./product.html?slug='+encodeURIComponent(p.slug)+'">'+p.name+'</a><div class="j-qty"><button type="button" data-qty="-1" data-id="'+p.id+'" aria-label="Уменьшить количество">−</button><strong>'+row.qty+'</strong><button type="button" data-qty="1" data-id="'+p.id+'" aria-label="Увеличить количество">+</button></div></span><strong>'+money(p.price*row.qty)+'</strong><button class="j-link" data-remove="'+p.id+'">Удалить</button></div>').join('')+'<h2>Итого: '+money(items.reduce((s,x)=>s+x.p.price*x.row.qty,0))+'</h2><p>Заказ и оплата в демонстрационной версии не отправляются.</p><a class="j-btn" href="./checkout.html">Перейти к оформлению (демо)</a>';
 }
 root.addEventListener('click',e=>{
  const remove=e.target.closest('[data-remove]'),qty=e.target.closest('[data-qty]');
  if(remove){writeDemo(readDemo().filter(x=>x.id!==remove.dataset.remove));draw();return}
  if(qty){const rows=readDemo(),item=rows.find(x=>x.id===qty.dataset.id);if(item){item.qty=Math.max(1,Math.min(99,item.qty+Number(qty.dataset.qty)));writeDemo(rows);draw()}}
 });
 draw();
}).catch(e=>document.querySelector('#cart-content').textContent=e.message);