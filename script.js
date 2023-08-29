const loadData = async (searchText,isShowAll) => {
    
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  dataLoad(data.data,isShowAll);
  console.log(data.data);
};

const dataLoad = (phone,isShowAll) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent = "";
const showAllPage=document.getElementById('showall-container')
if (phone.length>12&& !isShowAll) {
    showAllPage.classList.remove('hidden')
}
else{
    showAllPage.classList.add('hidden')
}
if (!isShowAll) {
    phone=phone.slice(0,12)
}
 

  phone.forEach((mobile) => {
    const card = document.createElement("div");
    card.classList = `card bg-base-100 shadow-xl border`;
    card.innerHTML = `
        <figure class="px-5 pt-5">
            <img src="${mobile.image}" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">${mobile.phone_name}</h2>
            <p>${mobile.slug}</p>
            <div class="card-actions">
                <button class="btn btn-primary">Show Details</button>
            </div>
        </div>
        `;
    phoneContainer.appendChild(card);
  });
  loadingHandleLoadingSpinner(false)
};

const handleSearchData = (isShowAll) => {
    loadingHandleLoadingSpinner(true)
  const searchField = document.getElementById("default-search");
  const searchText = searchField.value;
  console.log(searchText);
  loadData(searchText,isShowAll);
//   searchField.value = "";
};

const loadingHandleLoadingSpinner=(isLoading)=>{
const spinnerCon=document.getElementById('spiner-box')
if (isLoading) {
    spinnerCon.classList.remove('hidden')
}
else{
    spinnerCon.classList.add('hidden')
}
}

const handleShowAll=()=>{
    handleSearchData(true)
}

// loadData();
