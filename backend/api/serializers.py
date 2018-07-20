from rest_framework import serializers
from rest_framework.fields import DateField

from .models import User, Images


class UserSerializer(serializers.ModelSerializer):
    # images = serializers.SlugRelatedField(
    #     many=True,
    #     read_only=True,
    #     slug_field='photo'
    # )

    # images = ImageSerializer()

    # images = serializers.HyperlinkedRelatedField(many=True, view_name='api:images-detail', read_only=True)

    birth = DateField(format='%d.%m.%Y', input_formats=None)

    class Meta:
        model = User
        fields = ('id', 'name', 'surname', 'age', 'birth', 'images')


class ImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Images
        fields = ('id', 'photo', 'like', 'user')