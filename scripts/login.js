async function login(email, password) {
    let url = "https://serysjohsewrcxkonnum.supabase.co/rest/v1/users?email=eq." + email + "&password=eq." + password + "&select=*";

    let response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
            apiKey: apiKey,
        }
    });

    let data = await response.json();
    return data;
}