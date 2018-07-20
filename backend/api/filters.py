from rest_framework import filters

class UsersNameFilterBackend(filters.BaseFilterBackend):
    filter_parameter = 'name'

    def filter_queryset(self, request, queryset, view):
        parameter = request.query_params.get(self.filter_parameter)
        if parameter:
            return queryset.filter(name=parameter)
        else:
            return queryset


class UsersSurnameFilterBackend(filters.BaseFilterBackend):
    filter_parameter = 'surname'

    def filter_queryset(self, request, queryset, view):
        parameter = request.query_params.get(self.filter_parameter)
        if parameter:
            return queryset.filter(surname=parameter)
        else:
            return queryset


class UserOrberByFilterBackend(filters.BaseFilterBackend):
    filter_parameter = 'order_by'

    def filter_queryset(self, request, queryset, view):
        parameter = request.query_params.get(self.filter_parameter)
        if parameter:
            return queryset.order_by(parameter)
        else:
            return queryset

class ImagePkFilterBackend(filters.BaseFilterBackend):
    filter_parameter = 'user'

    def filter_queryset(self, request, queryset, view):
        parameter = request.query_params.get(self.filter_parameter)
        if parameter:
            return queryset.filter(user=parameter)
        else:
            return queryset