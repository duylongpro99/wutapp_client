import createRepository from '~/api/repository';

export default (ctx, inject) => {
    const repositoryWithAxios = createRepository(ctx.$axios);
    const repositories = {
        userRepo: repositoryWithAxios('/auth'),
    };
    // inject('repository', repositoryWithAxios('/auth'));
    // inject('blogRepository', repositoryWithAxios('/blog'));
    inject('repositories', repositories);
};
// if add repo, at it in repo Type in plugin-types.d
