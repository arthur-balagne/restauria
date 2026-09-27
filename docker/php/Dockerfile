FROM php:8.4-fpm-alpine

# Install system dependencies and build utilities
RUN apk add --no-cache \
    acl \
    bash \
    fcgi \
    file \
    gettext \
    git \
    icu-dev \
    libzip-dev \
    linux-headers \
    oniguruma-dev \
    unzip \
    zip

# Install PHP extensions
COPY --from=mlocati/php-extension-installer /usr/bin/install-php-extensions /usr/local/bin/
RUN chmod +x /usr/local/bin/install-php-extensions && \
    install-php-extensions \
        apcu \
        ctype \
        iconv \
        intl \
        mbstring \
        opcache \
        pdo_mysql \
        redis \
        zip

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# Copy custom PHP configuration
COPY docker/php/conf.d/app.ini $PHP_INI_DIR/conf.d/

# Copy entrypoint script
COPY docker/php/docker-entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint

ENTRYPOINT ["docker-entrypoint"]
CMD ["php-fpm"]
