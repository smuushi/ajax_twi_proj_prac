const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  // debugger
  options.headers = {
    // Your code here
    ...options.headers
  };
  // options.body = {authenticity_token: csrfToken}
  // debugger
  return await fetch(url, options).then((res) => {
    if (res.ok) {
      return res.json();
    }
  })
}

export const foo = "bar"

export function followUser(id) {
  return customFetch(`/users/${id}/follow`, { method:"POST", headers: {'X-CSRF-TOKEN': csrfToken } } )
}

export function unfollowUser(id) {
  return customFetch(`/users/${id}/follow`, { method:"DELETE", headers: {'X-CSRF-TOKEN': csrfToken } } )
}