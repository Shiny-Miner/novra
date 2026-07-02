const supabase = window.supabaseClient;

async function getCurrentUser() {

    const { data } = await supabase.auth.getUser();

    return data.user;

}

async function logout() {

    await supabase.auth.signOut();

    window.location.href = "/pages/login.html";

}

window.getCurrentUser = getCurrentUser;
window.logout = logout;