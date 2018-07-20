from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from openpyxl import Workbook
from openpyxl.writer.excel import save_virtual_workbook
from django.http import HttpResponse

from .models import User, Images
from .serializers import UserSerializer, ImageSerializer
from .filters import UsersNameFilterBackend, UsersSurnameFilterBackend, UserOrberByFilterBackend, ImagePkFilterBackend

class UsersList(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = (UsersSurnameFilterBackend,
                       UsersNameFilterBackend,
                       UserOrberByFilterBackend)

    def delete(self, request):
       user_id = request.data['id']
       User.objects.get(id=user_id).delete()
       return Response(status=status.HTTP_204_NO_CONTENT)

class VoteView(APIView):

    def post(self, request, id):
        img = Images.objects.get(pk=id)
        if img.like >= 10:
            img.like = 10
            img.save()
            return Response({'id': img.id,
                             'likes': img.like})
        else:
            img.like += 1
            img.save()
            return Response({'id': img.id,
                             'likes': img.like})


class ImagesList(viewsets.ModelViewSet):
    queryset = Images.objects.all()
    serializer_class = ImageSerializer
    filter_backends = (ImagePkFilterBackend,)


def export_xlsx(request):
    users = User.objects.all()
    wb = Workbook()
    ws = wb.active
    ws.title = "Пользователи"
    rows = [['Имя', 'Фамилия', 'Дата рождения', 'Возраст']]
    for user in users:
        rows.append([user.name, user.surname, user.birth.strftime('%d.%m.%Y'), user.age])

    for row in rows:
        ws.append(row)

    wb.save('users.xlsx')
    response = HttpResponse(content=save_virtual_workbook(wb),
                            content_type='application/vnd.ms-excel')
    # response['Content-Disposition'] = 'attachment; filename=users.xlsx'
    return response