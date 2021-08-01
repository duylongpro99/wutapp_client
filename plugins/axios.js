export default function ({ $axios, redirect }) {
    const token = localStorage.getItem('authToken');
    const tokenString = token ? `Bearer ${token}` : null;
    $axios.setHeader('Authorization', tokenString);

    $axios.onError((error) => {
        if (error.response.status === 500) {
            redirect('/not-found');
        }
    });
}
